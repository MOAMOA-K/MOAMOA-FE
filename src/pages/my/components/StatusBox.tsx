import styled from '@emotion/styled';
import StatusItem from './StatusItem';
import useFeedback from '@/pages/feedback/hooks/useFeedback';

type StatusBoxProps = {
  storeId: string;
};

const StatusBox = ({ storeId }: StatusBoxProps) => {
  const { feedbackData, isLoading } = useFeedback({
    storeId: storeId,
  });

  if (isLoading || !feedbackData) {
    return null;
  }

  const unReadData = feedbackData.filter(
    (feedback) => feedback.status === 'UNREAD',
  );
  const completedData = feedbackData.filter(
    (feedback) => feedback.status === 'DONE',
  );

  return (
    <Container>
      <StatusItem value={feedbackData.length} label='총 피드백' />
      <StatusItem value={unReadData.length} label='개선 필요' />
      <StatusItem value={completedData.length} label='개선 완료' />
    </Container>
  );
};

export default StatusBox;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]};
`;
