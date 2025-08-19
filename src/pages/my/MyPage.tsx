import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import StatusSection from './components/StatusSection';
import HistorySection from './components/HistorySection';

const MyPage = () => {
  return (
    <>
      <Header title='마이페이지' />
      <Main>
        <StatusSection />
        <HistorySection />
      </Main>
      <NavigationCustomer />
    </>
  );
};

export default MyPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: #fcfcfc;
`;
