import { useOutletContext } from 'react-router-dom';
import FeedbackItem from './FeedbackItem';
import styled from '@emotion/styled';
import type { FeedbackContextType } from '../FeedbackPage';

const CompletedTab = () => {
  const { completedList } = useOutletContext<FeedbackContextType>();

  return (
    <Container>
      {completedList.map((feedback) => (
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

export default CompletedTab;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[6]}`};
  gap: ${({ theme }) => theme.spacing[4]};
`;
