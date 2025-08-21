import Typography from '@/components/UI/Typography';
import { LetterTag, type LetterTagType } from '@/constants/letter';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Bot, Heart, Star, Store } from 'lucide-react';

type PendingItemProps = {
  satisfaction: number;
  tag: LetterTagType;
  createAt: string;
  content: string;
  reply: string | null;
  status: 'PROCESSING' | 'DONE';
};

const FeedbackItem = ({
  satisfaction,
  tag,
  createAt,
  content,
  reply,
  status,
}: PendingItemProps) => {
  const theme = useTheme();

  return (
    <Card>
      <LineWrapper>
        <Wrapper>
          <StarBox>
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                fill={num <= satisfaction ? 'gold' : 'none'}
                stroke={theme.colors.gray[50]}
                strokeWidth={num <= satisfaction ? 0 : 1}
              />
            ))}
          </StarBox>
          <TagBox tag={tag}>
            <Typography variant='body2'>
              {LetterTag.find((item) => item.value === tag)?.label}
            </Typography>
          </TagBox>
          <StatusBox status={status}>
            <Typography variant='body2'>
              {status === 'PROCESSING' ? '처리 중' : '완료'}
            </Typography>
          </StatusBox>
        </Wrapper>
        <Typography variant='body2'>{createAt}</Typography>
      </LineWrapper>
      <Typography variant='body1'>{content}</Typography>
      {reply ? (
        <Card status='DONE'>
          <Wrapper>
            <Store />
            <Typography variant='body1' weight='medium'>
              사장님 답변
            </Typography>
          </Wrapper>
          <Typography variant='body1'>{reply}</Typography>
        </Card>
      ) : (
        <>
          <Card status='PROCESSING'>
            <Wrapper>
              <Bot />
              <Typography variant='body1' weight='medium'>
                AI 추천 개선 방안
              </Typography>
            </Wrapper>
            <Typography variant='body1'>~~~ 이렇게 개선해보세요</Typography>
          </Card>
          <Wrapper>
            <LinkButton>
              <Typography variant='body2' weight='medium' color='white'>
                답변하기
              </Typography>
            </LinkButton>
            <HeartButton type='button'>
              <Heart size={20} />
            </HeartButton>
          </Wrapper>
        </>
      )}
    </Card>
  );
};

export default FeedbackItem;

const Card = styled.div<{ status?: 'PROCESSING' | 'DONE' }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, status }) =>
    status && status in theme.colors.feedback
      ? theme.colors.feedback[status]
      : theme.colors.gray[0]};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
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

const StatusBox = styled.div<{ status: 'PROCESSING' | 'DONE' }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: 16px;
  background-color: ${({ theme, status }) => theme.colors.feedback[status]};
`;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.owner.main};
`;

const HeartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[70]};
  cursor: pointer;
`;
