import axiosInstance from '@/api/axiosInstance';
import { API_PATHS } from '@/api/paths';

/** 리스트 아이템 타입 */
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
  menuList: Array<{
    id: number;
    storeId: number;
    name: string;
    price: number;
    description?: string;
    imageUrl?: string;
  }>;
  announcementList: Array<{
    description?: string;
    id: number;
    storeId: number;
    feedbackId: number;
    feedbackContent: string;
    content: string;
  }>;
};

export async function fetchStoreList(params: {
  keyword?: string;
  latitude?: number;
  longitude?: number;
}): Promise<StoreListItem[]> {
  const data = await axiosInstance.get<StoreListItem[], StoreListItem[]>(
    API_PATHS.STORE_LIST ?? '/api/store/list',
    { params },
  );
  return data; // <- 이미 T로 언랩됨
}

export async function fetchStoreDetail(id: number): Promise<StoreDetailDTO> {
  const data = await axiosInstance.get<StoreDetailDTO, StoreDetailDTO>(
    API_PATHS.STORE_DETAIL ? API_PATHS.STORE_DETAIL(id) : `/api/store/${id}`,
  );
  return data; // <- 이미 T로 언랩됨
}
