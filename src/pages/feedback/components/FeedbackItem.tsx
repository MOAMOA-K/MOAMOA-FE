import Typography from '@/components/UI/Typography';
import { LetterTag, type LetterTagType } from '@/constants/letter';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Star } from 'lucide-react';
import DoneSection from './DoneSection';
import UnReadSection from './ProcessingSection';

type FeedbackItemProps = {
  rating: number;
  type: LetterTagType;
  createAt: string;
  modifiedContent: string;
  reply: string | null;
  status: 'UNREAD' | 'DONE';
  feedbackId: string;
  storeId: string;
};

const FeedbackItem = ({
  rating,
  type,
  createAt,
  modifiedContent,
  reply,
  status,
  feedbackId,
  storeId,
}: FeedbackItemProps) => {
  const theme = useTheme();

  return (
    <Card>
      <LineWrapper>
        <Wrapper>
          <StarBox>
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                size={20}
                fill={num <= rating ? 'gold' : 'none'}
                stroke={theme.colors.gray[50]}
                strokeWidth={num <= rating ? 0 : 1}
              />
            ))}
          </StarBox>
          <TagBox tag={type}>
            <Typography variant='body2'>
              {LetterTag.find((item) => item.value === type)?.label}
            </Typography>
          </TagBox>
          <StatusBox status={status}>
            <Typography variant='body2'>
              {status === 'UNREAD' ? '대기 중' : '완료'}
            </Typography>
          </StatusBox>
        </Wrapper>
        <Typography variant='body2'>{createAt}</Typography>
      </LineWrapper>
      <ContentBox>
        <Typography variant='body1'>{modifiedContent}</Typography>
      </ContentBox>
      {reply ? (
        <DoneSection reply={reply} />
      ) : (
        <UnReadSection storeId={storeId} feedbackId={feedbackId} />
      )}
    </Card>
  );
};

export default FeedbackItem;

const Card = styled.div<{ status?: 'UNREAD' | 'DONE' }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, status }) =>
    status && status in theme.colors.feedback
      ? theme.colors.feedback[status]
      : theme.colors.gray[0]};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};
  width: 100%;
  max-width: 550px;
`;

const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
`;

const TagBox = styled.div<{ tag: LetterTagType }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: 16px;
  background-color: ${({ theme, tag }) => theme.colors.tag[tag]};
`;

const StatusBox = styled.div<{ status: 'UNREAD' | 'DONE' }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: 16px;
  background-color: ${({ theme, status }) => theme.colors.feedback[status]};
`;

const ContentBox = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;
