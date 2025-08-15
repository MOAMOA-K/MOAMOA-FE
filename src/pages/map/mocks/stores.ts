export type Store = {
  id: number;
  name: string;
  category: string;
  lat: number;
  lng: number;
};

export const mockStores: Store[] = [
  { id: 1, name: '초밥집', category: '일식', lat: 35.88924, lng: 128.61151 },
  { id: 2, name: '카페 드림', category: '카페', lat: 35.88892, lng: 128.61084 },
  { id: 3, name: '치킨마루', category: '한식', lat: 35.88812, lng: 128.61203 },
];
