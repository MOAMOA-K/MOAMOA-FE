import {
  postUserCouponUse,
  type PostUserCouponUseParams,
} from '@/api/user-coupon/postUserCouponUse';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUserCouponUse = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<void, Error, PostUserCouponUseParams>({
    mutationFn: postUserCouponUse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-coupon'],
      });
    },
  });

  return { postUserCouponUse: mutate };
};

export default useUserCouponUse;
