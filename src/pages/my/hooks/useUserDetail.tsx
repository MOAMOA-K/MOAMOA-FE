import getUserDetail from '@/api/user/getUserDetail';
import { useQuery } from '@tanstack/react-query';

const useUserDetail = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userDetail'],
    queryFn: getUserDetail,
  });

  return {
    userDetail: data,
    isLoading,
    isError,
  };
};

export default useUserDetail;
