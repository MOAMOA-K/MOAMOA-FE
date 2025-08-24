import { getUser } from '@/api/user/getUser';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return { userData, isLoading, isError };
};

export default useUser;
