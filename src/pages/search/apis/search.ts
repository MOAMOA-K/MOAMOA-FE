import { mockStores } from '@/pages/map/mocks/stores';

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
    .filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.category?.toLowerCase().includes(q),
    )
    .map((s) => ({
      ...s,
      id: String(s.id), // 일관성 위해 문자열로
    }));
}

export async function searchStores(keyword: string): Promise<SearchItem[]> {
  // 네트워크 없이 mock 사용
  await new Promise((r) => setTimeout(r, 200)); // UX용 딜레이
  return filterMock(keyword);
}
