import styled from '@emotion/styled';
import logo from '/public/logo.svg';

import { HEADER_HEIGHT } from '@/constants/number';
import { ArrowLeft } from 'lucide-react';

type HeaderProps = {
  title?: string;
  onBack?: () => void; // ← 추가: 뒤로가기 핸들러
  right?: React.ReactNode; // ← 추가: 우측 슬롯(공유/즐겨찾기 등)
};

const Header = ({ title = '', onBack }: HeaderProps) => {
  return (
    <Container>
      {onBack ? (
        <IconBtn aria-label='뒤로가기' onClick={onBack}>
          <ArrowLeft size={22} />
        </IconBtn>
      ) : (
        <Logo src={logo} alt='로고' />
      )}
      <Title>{title}</Title>
      <Empty />
    </Container>
  );
};
export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

const IconBtn = styled.button`
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.default};
  border-radius: 8px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  padding-left: 6px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1.fontSize};
  line-height: ${({ theme }) => theme.typography.title1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.default};
`;

const Empty = styled.div`
  width: 30px;
`;
