import styled from '@emotion/styled';
import ReceiveFeedbackItem from './ReceiveFeedbackItem';
import { receiveFeedbacks } from '../mocks/feedbacks';

const ReceiveFeedbackSection = () => {
  return (
    <Container>
      <Wrapper>
        <Title>최근 받은 피드백</Title>
        {receiveFeedbacks.map((feedback) => (
          <ReceiveFeedbackItem
            key={feedback.id}
            feedbackLetterTag={feedback.letterTag}
            satisfaction={feedback.satisfaction}
            content={feedback.content}
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

const Title = styled.p`
  font-size: ${({ theme }) => theme.typography.title2.fontSize};
  line-height: ${({ theme }) => theme.typography.title2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.default};
`;
