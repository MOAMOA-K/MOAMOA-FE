import FeedbackItem from './FeedbackItem';
import styled from '@emotion/styled';
import type { FeedbackContextType } from '../FeedbackPage';
import { useOutletContext } from 'react-router-dom';

const AllTab = () => {
  const { feedbackData } = useOutletContext<FeedbackContextType>();

  return (
    <Container>
      {feedbackData.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          rating={feedback.rating}
          type={feedback.type}
          createdAt={feedback.createdAt}
          modifiedContent={feedback.modifiedContent}
          reply={feedback.reply}
          status={feedback.status}
          feedbackId={feedback.id.toString()}
          storeId={'1'}
        />
      ))}
    </Container>
  );
};

export default AllTab;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[6]}`};
  gap: ${({ theme }) => theme.spacing[4]};
`;
