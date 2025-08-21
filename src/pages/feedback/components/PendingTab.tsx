import { useOutletContext } from 'react-router-dom';
import type { FeedbackData } from '../mocks/feedback';
import FeedbackItem from './FeedbackItem';
import styled from '@emotion/styled';

const PendingTab = () => {
  const { pendingList } = useOutletContext<{
    pendingList: FeedbackData[];
  }>();

  return (
    <Container>
      {pendingList.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          rating={feedback.rating}
          type={feedback.type}
          createAt={feedback.createdAt}
          modifiedContent={feedback.modifiedContent}
          reply={feedback.reply}
          status={feedback.status}
        />
      ))}
    </Container>
  );
};

export default PendingTab;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[6]}`};
  gap: ${({ theme }) => theme.spacing[4]};
`;
