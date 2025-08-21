import Header from '@/components/layout/Header';
import NavigationOwner from '@/components/layout/NavigationOwner';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import TabNavigation from './components/TabNavigation';
import { Outlet, useLocation } from 'react-router-dom';
import { feedbackData } from './mocks/feedback';

const FeedbackPage = () => {
  const location = useLocation();

  return (
    <>
      <Header title='피드백 관리' />
      <Main>
        <TabNavigation selected={location.pathname} />
        <Outlet context={{ feedbackData }} />
      </Main>
      <NavigationOwner />
    </>
  );
};

export default FeedbackPage;
const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.owner.background};
`;
