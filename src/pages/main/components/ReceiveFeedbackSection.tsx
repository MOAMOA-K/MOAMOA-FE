import styled from '@emotion/styled';
import ReceiveFeedbackItem from './ReceiveFeedbackItem';
import Typography from '@/components/UI/Typography';
import useStoreFeedback from '../hooks/useStoreFeedback';

const ReceiveFeedbackSection = () => {
  const { feedbackData, isLoading } = useStoreFeedback({ storeId: '1' });

  if (isLoading || !feedbackData) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <Typography variant='title2' weight='bold'>
          최근 받은 피드백
        </Typography>
        {feedbackData.slice(0, 3).map((feedback) => (
          <ReceiveFeedbackItem
            key={feedback.id}
            type={feedback.type}
            rating={feedback.rating}
            content={feedback.modifiedContent}
            createdAt={feedback.createdAt}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ReceiveFeedbackSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[5]} 0`};
  width: 100%;
  max-width: 450px;
`;
