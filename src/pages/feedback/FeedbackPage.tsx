import Header from '@/components/layout/Header';
import NavigationOwner from '@/components/layout/NavigationOwner';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import TabNavigation from './components/TabNavigation';
import { Outlet, useLocation } from 'react-router-dom';
import useFeedback from './hooks/useFeedback';
import useStoreMy from '../main/hooks/useStoreMy';

export type FeedbackContextType = {
  feedbackData: Feedback[];
  unReadData: Feedback[];
  completedData: Feedback[];
  storeId: string;
};

const FeedbackPage = () => {
  const location = useLocation();
  const { store } = useStoreMy();
  const { feedbackData, isLoading } = useFeedback({
    storeId: store?.id?.toString() ?? '',
    enabled: !!store,
  });

  if (isLoading || !feedbackData || !store) {
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
        <Outlet
          context={{
            feedbackData,
            unReadData,
            completedData,
            storeId: store.id,
          }}
        />
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
