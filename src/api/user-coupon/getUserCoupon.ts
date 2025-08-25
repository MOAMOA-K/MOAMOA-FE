import { API_PATHS } from '@/api/paths';
import axiosInstance from '@/api/axiosInstance';

export const getUserCoupon = async (): Promise<MyCoupon[]> => {
  return await axiosInstance.get(API_PATHS.USER_COUPON);
};
