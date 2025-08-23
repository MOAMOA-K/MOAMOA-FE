import { postSignup, type PostSignupParams } from '@/api/auth/postSignup';
import { ROUTE_PATH } from '@/routes/paths';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const navigate = useNavigate();
  const {
    isPending,
    isError,
    mutate: signup,
  } = useMutation<void, Error, PostSignupParams>({
    mutationFn: postSignup,
    onSuccess: () => {
      navigate(ROUTE_PATH.LOGIN);
    },
  });

  return { isPending, isError, signup };
};

export default useSignup;
