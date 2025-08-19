export type Store = {
  id: number;
  name: string;
  category?: string;
  lat: number;
  lng: number;
  address?: string;
  image?: string;
  openTime?: string;
  closeTime?: string;
};

export const mockStores: Store[] = [
  {
    id: 1,
    name: '모아모아 분식',
    category: '한식',
    lat: 35.8889,
    lng: 128.6109,
    address: '북구 대학로 80',
    image: '',
    openTime: '11:00',
    closeTime: '22:00',
  },
  {
    id: 2,
    name: '초밥집',
    category: '일식',
    lat: 35.8896,
    lng: 128.6122,
    address: '북구 대학로 82',
  },
  {
    id: 3,
    name: '파스타랩',
    category: '양식',
    lat: 35.8879,
    lng: 128.6127,
    address: '북구 대학로 78',
  },
  {
    id: 4,
    name: '달콤 카페',
    category: '카페',
    lat: 35.8884,
    lng: 128.6096,
    address: '북구 대학로 76',
  },
  {
    id: 5,
    name: '왕돈까스',
    category: '한식',
    lat: 35.8892,
    lng: 128.6099,
    address: '북구 대학로 74',
  },
];
