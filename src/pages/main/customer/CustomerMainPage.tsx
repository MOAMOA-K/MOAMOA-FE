import NavigationCustomer from '@/components/layout/NavigationCustomer';
import CustomerDashboardSection from '../components/CustomerDashboardSection';
import FeedbackSection from '../components/FeedbackSection';
import InformationSection from '../components/InformationSection';
import ShortcutSection from '../components/ShortcutSection';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import { ROUTE_PATH } from '@/routes/paths';
import { Mails } from 'lucide-react';
import useUserDetail from '../hooks/useUserDetail';

const CustomerMainPage = () => {
  const { userData, isLoading } = useUserDetail();

  if (isLoading || !userData) {
    return null;
  }

  return (
    <>
      <Main>
        <InformationSection
          userName={userData.nickname}
          content='오늘도 더 나은 대학가를 함께 만들어가요'
        />
        <CustomerDashboardSection point={userData.points} />
        <ShortcutSection
          icon={<Mails />}
          title='마음의 편지'
          description='피드백 보내러 가기'
          link={ROUTE_PATH.MAP}
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
