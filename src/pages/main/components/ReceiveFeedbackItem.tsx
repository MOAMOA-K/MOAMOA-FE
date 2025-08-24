import Typography from '@/components/UI/Typography';
import { LetterTag, type LetterTagType } from '@/constants/letter';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Star } from 'lucide-react';

type ReceiveFeedbackItemProps = {
  type: LetterTagType;
  rating: number;
  content: string;
  createdAt: string;
};

const ReceiveFeedbackItem = ({
  type,
  rating,
  content,
  createdAt,
}: ReceiveFeedbackItemProps) => {
  const theme = useTheme();

  return (
    <Card>
      <ScoreWrapper>
        <Wrapper>
          <StarBox>
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                fill={num <= rating ? 'gold' : 'none'}
                strokeWidth={num <= rating ? 0 : 1}
                stroke={theme.colors.gray[50]}
              />
            ))}
          </StarBox>
          <LetterTagBox variant={type}>
            <Typography variant='body2'>
              {LetterTag.find((tag) => tag.value === type)?.label}
            </Typography>
          </LetterTagBox>
        </Wrapper>
        <Typography variant='body2'>{createdAt}</Typography>
      </ScoreWrapper>
      <Typography variant='body1'>{content}</Typography>
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
