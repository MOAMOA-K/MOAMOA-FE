import axiosInstance from '@/api/axiosInstance';
import { API_PATHS } from '@/api/paths';

export type StoreCoupon = {
  id: number;
  storeName: string;
  name: string;
  description: string;
  pointCost: number;
  validUntil: string; // 'yyyy-MM-dd'
};

export async function getCouponsByStore(
  storeId: number,
): Promise<StoreCoupon[]> {
  const url =
    typeof API_PATHS?.COUPONS_DETAIL === 'function'
      ? API_PATHS.COUPONS_DETAIL(storeId)
      : `/api/coupons/store/${storeId}`;

  // axiosInstance가 data를 언랩해주므로 그대로 배열이 반환됩니다.
  return await axiosInstance.get<StoreCoupon[], StoreCoupon[]>(url);
}
