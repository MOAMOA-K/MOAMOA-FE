import { postLogin } from '@/api/auth/postLogin';
import type { PostLoginParams, PostLoginResult } from '@/api/auth/postLogin';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTE_PATH } from '@/routes/paths';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const { data, isPending, isError, mutate } = useMutation<
    PostLoginResult,
    Error,
    PostLoginParams
  >({
    mutationFn: postLogin,
  });

  const login = (params: PostLoginParams) => {
    mutate(params, {
      onSuccess: (data) => {
        user?.updateAccessToken(data.accessToken);
        navigate(ROUTE_PATH.MAIN);
      },
    });
  };

  return { data, isPending, isError, login };
};

export default useLogin;
