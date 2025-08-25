import axiosInstance from '@/api/axiosInstance';
import { API_PATHS } from '@/api/paths';

export type CreateCouponBody = {
  storeId: number;
  name: string; // ≤ 100자
  description: string; // ≤ 500자
  pointCost: number; // ≥ 0
  validUntil: string; // yyyy-MM-dd
  password: string;
};

export async function createCoupon(body: CreateCouponBody): Promise<string> {
  const url = API_PATHS?.COUPONS ?? '/api/coupons';
  return await axiosInstance.post(url, body); // axiosInstance가 data로 언랩
}
