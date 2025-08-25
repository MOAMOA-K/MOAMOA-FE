import {
  postUserCoupon,
  type PostUserCouponParams,
} from '@/api/user-coupon/postUserCoupon';
import { useMutation } from '@tanstack/react-query';

const useUserCoupon = () => {
  const { mutate } = useMutation<void, Error, PostUserCouponParams>({
    mutationFn: postUserCoupon,
  });

  return { postUserCoupon: mutate };
};

export default useUserCoupon;
