import { getUserCoupon } from '@/api/user-coupon/getUserCoupon';
import { useQuery } from '@tanstack/react-query';

const useMyCoupon = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user-coupon'],
    queryFn: getUserCoupon,
  });

  return {
    myCoupon: data,
    isLoading,
    isError,
  };
};

export default useMyCoupon;
