import { getCoupons } from '@/api/coupon/getCoupons';
import { useQuery } from '@tanstack/react-query';

const useCoupons = () => {
  const {
    data: coupons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['coupons'],
    queryFn: getCoupons,
  });

  return { coupons, isLoading, isError };
};

export default useCoupons;
