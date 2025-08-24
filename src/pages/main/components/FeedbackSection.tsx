import styled from '@emotion/styled';
import { feedbacks } from '../mocks/feedbacks';
import FeedbackItem from './FeedbackItem';
import useCustomerFeedback from '../hooks/useCustomerFeedback';
import Typography from '@/components/UI/Typography';

const FeedbackSection = () => {
  const { feedbackData, isLoading, isError } = useCustomerFeedback();

  if (isLoading) return null;
  if (isError || !feedbackData)
    return (
      <Container>
        <Wrapper>
          <Title>최근 피드백</Title>
          <ErrorBox>
            <Typography variant='body1'>최근 피드백이 없습니다.</Typography>
          </ErrorBox>
        </Wrapper>
      </Container>
    );

  return (
    <Container>
      <Wrapper>
        <Title>최근 피드백</Title>
        {feedbacks.map((feedback) => (
          <FeedbackItem
            key={feedback.id}
            title={feedback.title}
            content={feedback.content}
            date={feedback.createdAt}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default FeedbackSection;

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

const Title = styled.p`
  font-size: ${({ theme }) => theme.typography.title2.fontSize};
  line-height: ${({ theme }) => theme.typography.title2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.default};
`;

const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
