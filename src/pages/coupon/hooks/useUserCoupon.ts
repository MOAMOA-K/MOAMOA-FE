import {
  postUserCoupon,
  type PostUserCouponParams,
} from '@/api/user-coupon/postUserCoupon';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUserCoupon = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<void, Error, PostUserCouponParams>({
    mutationFn: postUserCoupon,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
  });

  return { postUserCoupon: mutate };
};

export default useUserCoupon;
