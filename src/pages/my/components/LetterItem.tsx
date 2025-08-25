import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { Star, Store } from 'lucide-react';

type LetterItemProps = {
  id: number;
  storeName: string;
  rating: number;
  content: string;
  reply: string | null;
  createdAt: string;
};

const LetterItem = ({
  storeName,
  rating,
  content,
  reply,
  createdAt,
}: LetterItemProps) => {
  return (
    <Container>
      <TitleBox>
        <Typography variant='title2' weight='bold'>
          {storeName}
        </Typography>
        <Typography variant='body2' color='sub'>
          {createdAt}
        </Typography>
      </TitleBox>
      <StarBox>
        {[1, 2, 3, 4, 5].map((num) => (
          <Star
            key={num}
            fill={num <= rating ? 'gold' : 'none'}
            stroke='black'
          />
        ))}
      </StarBox>
      <Typography variant='body1'>{content}</Typography>
      {reply && (
        <Card>
          <Wrapper>
            <Store />
            <Typography variant='body1' weight='medium'>
              사장님 답변
            </Typography>
          </Wrapper>
          <Typography variant='body1'>
            {JSON.parse(reply).replyContent}
          </Typography>
        </Card>
      )}
    </Container>
  );
};

export default LetterItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.feedback.DONE};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};
  width: 100%;
  max-width: 550px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;
