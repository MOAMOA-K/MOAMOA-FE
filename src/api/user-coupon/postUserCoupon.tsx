import { API_PATHS } from '@/api/paths';
import axiosInstance from '@/api/axiosInstance';

export type PostUserCouponParams = {
  couponId: string;
};

export const postUserCoupon = async (
  params: PostUserCouponParams,
): Promise<void> => {
  return await axiosInstance.post(API_PATHS.USER_COUPON, params);
};
