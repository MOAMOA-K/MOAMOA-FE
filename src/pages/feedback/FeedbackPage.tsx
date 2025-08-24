import Header from '@/components/layout/Header';
import NavigationOwner from '@/components/layout/NavigationOwner';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import TabNavigation from './components/TabNavigation';
import { Outlet, useLocation } from 'react-router-dom';
import useFeedback from './hooks/useFeedback';
import { useAuth } from '@/contexts/AuthContext';

export type FeedbackContextType = {
  feedbackData: Feedback[];
  unReadData: Feedback[];
  completedData: Feedback[];
};

const FeedbackPage = () => {
  const location = useLocation();
  const user = useAuth();
  const { feedbackData, isLoading } = useFeedback({
    storeId: '1',
    accessToken: user?.accessToken || '',
  });

  if (isLoading || !feedbackData) {
    return <div>Loading...</div>;
  }

  const unReadData = feedbackData.filter(
    (feedback) => feedback.status === 'UNREAD',
  );
  const completedData = feedbackData.filter(
    (feedback) => feedback.status === 'DONE',
  );

  return (
    <>
      <Header title='피드백 관리' />
      <Main>
        <TabNavigation
          selected={location.pathname}
          allCount={feedbackData.length}
          pendingCount={unReadData.length}
          completedCount={completedData.length}
        />
        <Outlet context={{ feedbackData, unReadData, completedData }} />
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
