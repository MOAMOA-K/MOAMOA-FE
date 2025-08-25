import { getStoreRating } from '@/api/store/getStoreRating';
import { useQuery } from '@tanstack/react-query';

const useStoreRating = (storeId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['storeRating', storeId],
    queryFn: () => getStoreRating(storeId),
  });

  return { storeRating: data, isLoading };
};

export default useStoreRating;
