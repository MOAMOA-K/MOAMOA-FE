import { getStoreMy } from '@/api/store/getStoreMy';
import { useQuery } from '@tanstack/react-query';

const useStoreMy = () => {
  const { data: store, isLoading } = useQuery({
    queryKey: ['store-my'],
    queryFn: getStoreMy,
  });

  return { store, isLoading };
};

export default useStoreMy;
