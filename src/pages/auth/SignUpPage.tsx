import Typography from '@/components/UI/Typography';
import { ROUTE_PATH } from '@/routes/paths';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import FormItem from './components/FormItem';
import FormRadioItem from './components/FormRadioItem';
import { useState } from 'react';
import useSignup from './hooks/useSignup';

const SignUpPage = () => {
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<
    'ROLE_CUSTOMER' | 'ROLE_OWNER' | 'ROLE_ADMIN'
  >('ROLE_CUSTOMER');
  const { signup } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({ nickname, email, password, role });
  };

  return (
    <Main>
      <Logo src='/public/logo.svg' alt='MOAMOA 로고' />
      <Form onSubmit={handleSubmit}>
        <FormItem
          label='닉네임'
          type='text'
          placeholder='닉네임을 입력해주세요'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <FormItem
          label='이메일'
          type='email'
          placeholder='이메일을 입력해주세요'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormItem
          label='비밀번호'
          type='password'
          placeholder='비밀번호를 입력해주세요'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormRadioItem role={role} setRole={setRole} />
        <Button type='submit'>
          <Typography variant='subtitle1' weight='bold' color='white'>
            회원가입
          </Typography>
        </Button>
      </Form>

      <Link to={ROUTE_PATH.LOGIN}>
        <Typography variant='body1' color='sub'>
          아이디가 이미 있으신가요? 로그인하기
        </Typography>
      </Link>
    </Main>
  );
};

export default SignUpPage;

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

const Logo = styled.img`
  width: 160px; /* 필요하면 크기 조절 */
  height: auto;
  object-fit: contain;
  user-select: none;
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
