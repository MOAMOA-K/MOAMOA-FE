import axiosInstance from '../axiosInstance';
import { API_PATHS } from '../paths';

export const getCoupons = async (): Promise<Coupon[]> => {
  const response: Coupon[] = await axiosInstance.get(API_PATHS.COUPONS);

  return response;
};
