import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { Star } from 'lucide-react';
import type { LetterTagType } from '../constants/letter';

type SelectStarProps = {
  satisfaction: number;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      satisfaction: number;
      letterTag: LetterTagType;
      letterText: string;
    }>
  >;
};

const SelectStar = ({ satisfaction, setFormData }: SelectStarProps) => {
  return (
    <Container>
      <Typography variant='title2' weight='medium' as='h3'>
        전체적인 만족도
      </Typography>
      <StarWrapper>
        {[1, 2, 3, 4, 5].map((num) => (
          <Star
            key={num}
            size={32}
            fill={num <= satisfaction ? 'gold' : 'none'}
            stroke='black'
            onClick={() =>
              setFormData((prev) => ({ ...prev, satisfaction: num }))
            }
            style={{ cursor: 'pointer' }}
          />
        ))}
      </StarWrapper>
    </Container>
  );
};

export default SelectStar;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[10]};
`;
