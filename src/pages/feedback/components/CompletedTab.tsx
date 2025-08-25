import { useOutletContext } from 'react-router-dom';
import FeedbackItem from './FeedbackItem';
import styled from '@emotion/styled';
import type { FeedbackContextType } from '../FeedbackPage';

const CompletedTab = () => {
  const { completedData, storeId } = useOutletContext<FeedbackContextType>();

  return (
    <Container>
      {completedData.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          rating={feedback.rating}
          type={feedback.type}
          createdAt={feedback.createdAt}
          modifiedContent={feedback.modifiedContent}
          reply={feedback.reply}
          status={feedback.status}
          feedbackId={feedback.id.toString()}
          storeId={storeId}
        />
      ))}
    </Container>
  );
};

export default CompletedTab;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[6]}`};
  gap: ${({ theme }) => theme.spacing[4]};
`;
