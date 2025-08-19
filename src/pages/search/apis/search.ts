import { mockStores } from '@/pages/map/mocks/stores';
import { delay } from '@/mocks/utils';

export type SearchItem = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category?: string;
  image?: string;
  address?: string;
  openTime?: string;
  closeTime?: string;
};

// 백엔드 API와 연동하는 경우 추가?

// export async function searchStores(
//   keyword: string,
//   opts?: { signal?: AbortSignal },
// ): Promise<SearchItem[]> {
//   const q = keyword.trim();
//   if (!q) return [];
//   const res = await fetch(
//     `/api/stores/search?keyword=${encodeURIComponent(q)}`, //예시
//     {
//       signal: opts?.signal,
//     },
//   );
//   if (!res.ok) throw new Error(`Search failed: ${res.status}`);
//   const data = await res.json();
//   // 백엔드 응답 구조에 맞게 매핑
//   return Array.isArray(data.items) ? data.items : data;
// }

function filterMock(keyword: string): SearchItem[] {
  const q = keyword.trim().toLowerCase();
  if (!q) return [];
  return mockStores
    .filter((s) => {
      const inName = s.name.toLowerCase().includes(q);
      const inCat = s.category ? s.category.toLowerCase().includes(q) : false;
      const inAddr = s.address ? s.address.toLowerCase().includes(q) : false;
      return inName || inCat || inAddr;
    })
    .map((s) => ({ ...s, id: String(s.id) }));
}

export async function searchStores(
  keyword: string,
  { delayMs = 200 }: { delayMs?: number } = {},
): Promise<SearchItem[]> {
  await delay(delayMs);
  return filterMock(keyword);
}
