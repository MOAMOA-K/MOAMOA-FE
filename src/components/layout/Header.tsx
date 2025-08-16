import styled from '@emotion/styled';
import logo from '@/assets/logo.svg';

type HeaderProps = {
  title?: string;
};

const Header = ({ title = '' }: HeaderProps) => {
  return (
    <Container>
      <Logo src={logo} alt='로고' />
      <Title>{title}</Title>
      <div></div>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing[3]};
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1.fontSize};
  line-height: ${({ theme }) => theme.typography.title1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.default};
`;
