import NavigationOwner from '@/components/layout/NavigationOwner';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import InformationSection from '../components/InformationSection';
import OwnerDashboardSection from '../components/OwnerDashboardSection';
import ShortcutSection from '../components/ShortcutSection';
import { ROUTE_PATH } from '@/routes/paths';
import { Mails } from 'lucide-react';
import ReceiveFeedbackSection from '../components/ReceiveFeedbackSection';

const OwnerMainPage = () => {
  return (
    <>
      <Main>
        <InformationSection
          userName='김사장'
          content='손님들의 진짜 속마음, 마음의 편지로 확인하세요'
        />
        <OwnerDashboardSection />
        <ShortcutSection
          icon={<Mails />}
          title='피드백 관리'
          description='고객 의견 확인하기'
          link={ROUTE_PATH.FEEDBACK}
        />
        <ReceiveFeedbackSection />
      </Main>
      <NavigationOwner />
    </>
  );
};

export default OwnerMainPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.owner.background};
`;
