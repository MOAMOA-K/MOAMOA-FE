import NavigationCustomer from '@/components/layout/NavigationCustomer';
import CustomerDashboardSection from '../components/CustomerDashboardSection';
import FeedbackSection from '../components/FeedbackSection';
import InformationSection from '../components/InformationSection';
import ShortcutSection from '../components/ShortcutSection';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import { ROUTE_PATH } from '@/routes/paths';
import { Mails } from 'lucide-react';

const CustomerMainPage = () => {
  return (
    <>
      <Main>
        <InformationSection
          userName='김민준'
          content='오늘도 더 나은 대학가를 함께 만들어가요'
        />
        <CustomerDashboardSection />
        <ShortcutSection
          icon={<Mails />}
          title='마음의 편지'
          description='익명 피드백 보내기'
          link={ROUTE_PATH.LETTER}
        />
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
