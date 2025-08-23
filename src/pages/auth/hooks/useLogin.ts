import { postLogin } from '@/api/auth/postLogin';
import type { PostLoginParams, PostLoginResult } from '@/api/auth/postLogin';
import { useAuth } from '@/contexts/AuthContext';
import { useMutation } from '@tanstack/react-query';

const useLogin = () => {
  const { data, isPending, isError, mutate } = useMutation<
    PostLoginResult,
    Error,
    PostLoginParams
  >({
    mutationFn: postLogin,
  });

  const user = useAuth();
  const login = (params: PostLoginParams) => {
    mutate(params, {
      onSuccess: (data) => {
        user?.updateAccessToken(data.accessToken);
      },
    });
  };

  return { data, isPending, isError, login };
};

export default useLogin;
