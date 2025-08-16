import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import DashboardSection from './components/DashboardSection';
import FeedbackSection from './components/FeedbackSection';
import InformationSection from './components/InformationSection';
import LetterSection from './components/LetterSection';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';

const MainPage = () => {
  return (
    <>
      <Header />
      <Main>
        <InformationSection />
        <DashboardSection />
        <LetterSection />
        <FeedbackSection />
      </Main>
      <NavigationCustomer />
    </>
  );
};

export default MainPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: #fcfcfc;
`;
