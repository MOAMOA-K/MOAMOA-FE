import Typography from '@/components/UI/Typography';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Star } from 'lucide-react';

type LetterItemProps = {
  name: string;
  satisfaction: number;
  content: string;
  date: string;
};

const LetterItem = ({ name, satisfaction, content, date }: LetterItemProps) => {
  const theme = useTheme();

  return (
    <Container>
      <TitleBox>
        <Typography variant='title2' weight='bold'>
          {name}
        </Typography>
        <Typography variant='body2' color={theme.colors.gray[70]}>
          {date}
        </Typography>
      </TitleBox>
      <StarBox>
        {[1, 2, 3, 4, 5].map((num) => (
          <Star
            key={num}
            fill={num <= satisfaction ? 'gold' : 'none'}
            stroke='black'
          />
        ))}
      </StarBox>
      <Typography variant='body1'>{content}</Typography>
      <ImageBox>
        <ImageDiv />
      </ImageBox>
    </Container>
  );
};

export default LetterItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[40]};
  padding: ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[2]};
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

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]};
`;

const ImageDiv = styled.div`
  width: 100%;
  max-width: 450px;
  height: 100%;
  background-color: #ccc;
`;
