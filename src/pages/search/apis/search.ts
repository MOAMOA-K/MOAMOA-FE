import { fetchStoreList, type StoreListItem } from '@/api/store/store';

// SearchResults에서 기대하는 아이템 구조 = 백엔드 리스트 아이템과 동일
export type SearchItem = StoreListItem;

// 경북대학교(기본 좌표, 위치 권한 거부/실패 시 사용)
const DEFAULT_LAT = 35.8889;
const DEFAULT_LNG = 128.6109;

async function getCoords(): Promise<{ lat: number; lng: number }> {
  // 브라우저 현재 위치 → 실패하면 KNU 좌표로 fallback
  return await new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ lat: DEFAULT_LAT, lng: DEFAULT_LNG });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }),
      () => resolve({ lat: DEFAULT_LAT, lng: DEFAULT_LNG }),
      { enableHighAccuracy: true, maximumAge: 10_000, timeout: 5000 },
    );
  });
}

// 검색 API
// - keyword와 현재 좌표를 백엔드에 전달
// - 토큰은 axios 인터셉터에서 자동으로 Authorization 주입됨

export async function searchStores(keyword: string): Promise<SearchItem[]> {
  const q = keyword.trim();
  if (!q) return [];

  const { lat, lng } = await getCoords();

  const list = await fetchStoreList({
    keyword: q,
    latitude: lat,
    longitude: lng,
  });

  if (import.meta.env.DEV) {
    console.group('[searchStores] /api/store/list');
    console.log('keyword:', q, 'lat/lng:', lat, lng);
    console.log('count:', list.length, 'first:', list[0]);
    console.groupEnd();
  }

  return list;
}
