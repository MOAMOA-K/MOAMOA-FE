import Header from '@/components/layout/Header';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';

const MyLetterPage = () => {
  return (
    <>
      <Header title='나의 쿠폰' />
      <Main>MyLetterPage</Main>
    </>
  );
};

export default MyLetterPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: #fcfcfc;
`;
