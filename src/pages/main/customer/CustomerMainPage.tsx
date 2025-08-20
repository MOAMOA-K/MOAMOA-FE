import NavigationCustomer from '@/components/layout/NavigationCustomer';
import DashboardSection from '../components/DashboardSection';
import FeedbackSection from '../components/FeedbackSection';
import InformationSection from '../components/InformationSection';
import LetterSection from '../components/LetterSection';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';

const CustomerMainPage = () => {
  return (
    <>
      <Main>
        <InformationSection
          userName='김민준'
          content='오늘도 더 나은 대학가를 함께 만들어가요'
        />
        <DashboardSection />
        <LetterSection />
        <FeedbackSection />
      </Main>
      <NavigationCustomer />
    </>
  );
};

export default CustomerMainPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.customer.background};
`;
