import Typography from '@/components/UI/Typography';
import { ROUTE_PATH } from '@/routes/paths';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import FormItem from './components/FormItem';
import useLogin from './hooks/useLogin';

const LoginPage = () => {
  const { login } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    login({ email, password });
  };

  return (
    <Main>
      <Typography variant='title1' weight='bold' as='h1'>
        모아모아뀽
      </Typography>
      <Form onSubmit={handleSubmit}>
        <FormItem
          label='이메일'
          type='email'
          placeholder='이메일을 입력해주세요'
        />
        <FormItem
          label='비밀번호'
          type='password'
          placeholder='비밀번호를 입력해주세요'
        />
        <Button type='submit'>
          <Typography variant='subtitle1' weight='bold' color='white'>
            로그인
          </Typography>
        </Button>
      </Form>

      <Link to={ROUTE_PATH.SIGN_UP}>
        <Typography variant='body1' color='sub'>
          아이디가 없으신가요? 회원가입하기
        </Typography>
      </Link>
    </Main>
  );
};

export default LoginPage;

const Main = styled.main`
  height: 100%;
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors.default.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Form = styled.form`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[6]};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.customer.main};
  border: none;
  border-radius: 20px;
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
`;
