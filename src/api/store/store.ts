import axiosInstance from '@/api/axiosInstance';
import { API_PATHS } from '@/api/paths';

export type StoreListItem = {
  id: number;
  name: string;
  canonicalName?: string;
  address?: string;
  latitude: number;
  longitude: number;
  description?: string;
  category?:
    | 'KOREAN'
    | 'CHINESE'
    | 'JAPANESE'
    | 'WESTERN'
    | 'CAFE'
    | 'FASTFOOD'
    | 'BAR'
    | 'OTHERS';
  imageUrl?: string;
  openingTime?: string;
};

export type StoreDetailDTO = StoreListItem & {
  userId: number;
  menus: Array<{
    id: number;
    storeId: number;
    name: string;
    price: number;
    description?: string;
    imageUrl?: string;
  }>;
  storeAnnouncements: Array<{
    id: number;
    storeId: number;
    feedbackId: number;
    feedbackContent: string;
    content: string;
  }>;
};

// 리스트 조회 (토큰 필요)

export async function fetchStoreList(
  params: { keyword?: string; latitude?: number; longitude?: number },
  accessToken: string, // ← 반드시 필요하도록 명시
) {
  const res = await axiosInstance.get('/api/store/list', {
    params,
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res.data;
}

export async function fetchStoreDetail(
  id: number,
  accessToken: string,
): Promise<StoreDetailDTO> {
  const res = await axiosInstance.get<StoreDetailDTO>(
    API_PATHS.STORE_DETAIL(id),
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  return res.data;
}
