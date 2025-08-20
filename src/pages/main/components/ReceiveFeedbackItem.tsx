import Typography from '@/components/UI/Typography';
import { LetterTag, type LetterTagType } from '@/constants/letter';
import { ROUTE_PATH } from '@/routes/paths';
import styled from '@emotion/styled';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

type ReceiveFeedbackItemProps = {
  feedbackLetterTag: LetterTagType;
  satisfaction: number;
  content: string;
  createdAt: string;
};

const ReceiveFeedbackItem = ({
  feedbackLetterTag,
  satisfaction,
  content,
  createdAt,
}: ReceiveFeedbackItemProps) => {
  return (
    <Card>
      <ScoreWrapper>
        <Wrapper>
          <StarBox>
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                fill={num <= satisfaction ? 'gold' : 'none'}
                strokeWidth={0}
              />
            ))}
          </StarBox>
          <LetterTagBox variant={feedbackLetterTag}>
            <Typography variant='body2'>
              {LetterTag.map((tag) =>
                tag.value === feedbackLetterTag ? tag.label : null,
              )}
            </Typography>
          </LetterTagBox>
        </Wrapper>
        <Typography variant='body2'>{createdAt}</Typography>
      </ScoreWrapper>
      <Typography variant='body1'>{content}</Typography>
      <Wrapper>
        <LinkButton to={ROUTE_PATH.FEEDBACK}>
          <Typography variant='body2' weight='medium' color='white'>
            답변하러 가기
          </Typography>
        </LinkButton>
        <HeartButton>
          <Heart size={20} />
        </HeartButton>
      </Wrapper>
    </Card>
  );
};

export default ReceiveFeedbackItem;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;

const ScoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
`;

const LetterTagBox = styled.div<{ variant: LetterTagType }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: 12px;
  background-color: ${({ theme, variant }) => theme.colors.tag[variant]};
`;

const LinkButton = styled(Link)`
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
