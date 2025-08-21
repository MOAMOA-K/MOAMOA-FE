import { useOutletContext } from 'react-router-dom';
import type { FeedbackData } from '../mocks/feedback';
import FeedbackItem from './FeedbackItem';
import styled from '@emotion/styled';

const CompletedTab = () => {
  const { feedbackData } = useOutletContext<{ feedbackData: FeedbackData[] }>();
  const completedList = feedbackData.filter(
    (feedback) => feedback.status === 'DONE',
  );

  return (
    <Container>
      {completedList.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          satisfaction={feedback.rating}
          tag={feedback.type}
          createAt={feedback.createdAt}
          content={feedback.modifiedContent}
          reply={feedback.reply}
          status={feedback.status}
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
