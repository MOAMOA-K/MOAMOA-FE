import NavigationOwner from '@/components/layout/NavigationOwner';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import InformationSection from '../components/InformationSection';
import OwnerDashboardSection from '../components/OwnerDashboardSection';

const OwnerMainPage = () => {
  return (
    <>
      <Main>
        <InformationSection
          userName='김사장'
          content='손님들의 진짜 속마음, 마음의 편지로 확인하세요'
        />
        <OwnerDashboardSection />
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
