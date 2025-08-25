import { API_PATHS } from '@/api/paths';
import axiosInstance from '@/api/axiosInstance';

export type PostUserCouponUseParams = {
  userCouponId: number;
  password: string;
};

export const postUserCouponUse = async (
  params: PostUserCouponUseParams,
): Promise<void> => {
  return await axiosInstance.post(API_PATHS.USER_COUPON_USE, params);
};
