import getUserDetail from '@/api/user/getUserDetail';
import { useQuery } from '@tanstack/react-query';

const useUserDetail = () => {
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user-detail'],
    queryFn: getUserDetail,
  });

  return { userData, isLoading, isError };
};

export default useUserDetail;
