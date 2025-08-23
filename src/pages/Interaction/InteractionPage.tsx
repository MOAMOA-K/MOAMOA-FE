import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import { HEADER_HEIGHT } from '@/constants/number';

export default function InteractionPage() {
  return (
    <Main>
      <Header title='고객소통' />
      <Inner>{/* 여기에 섹션/탭이 들어올 예정 */}</Inner>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.owner.background};
`;

const Inner = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.owner.background};
`;
