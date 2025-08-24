import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { ArrowRight, Star } from 'lucide-react';
import useStoreRating from '../hooks/useStoreRating';
import useStoreMy from '../hooks/useStoreMy';
import { ROUTE_PATH } from '@/routes/paths';
import { Link } from 'react-router-dom';

const OwnerDashboardSection = () => {
  const { store } = useStoreMy();
  const { storeRating, isLoading } = useStoreRating('1');

  if (isLoading || !storeRating || !store) {
    return null;
  }

  return (
    <Container>
      <Card>
        <StoreWrapper>
          <FlexColWrapper>
            <Typography variant='title2' weight='bold' color='white'>
              {store.name}
            </Typography>
            <Typography variant='body2' color='white'>
              {store.category}
            </Typography>
            <Typography variant='body2' color='white'>
              {store.address}
            </Typography>
          </FlexColWrapper>
          <FlexColWrapper>
            <StarWrapper>
              <Star fill='gold' strokeWidth={0} />
              <Typography variant='subtitle1' color='white' weight='medium'>
                {storeRating.toFixed(1)}
              </Typography>
            </StarWrapper>
            <Typography variant='body2' color='white'>
              고객 만족도
            </Typography>
          </FlexColWrapper>
        </StoreWrapper>
        <Button to={ROUTE_PATH.INTERACTION}>
          <Typography variant='body1' weight='bold' color='white'>
            쿠폰 관리하기
          </Typography>
          <ArrowRight />
        </Button>
      </Card>
    </Container>
  );
};

export default OwnerDashboardSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[3]};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.owner.main};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[6]}`};
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;

const StoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[1]}`};
`;

const FlexColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: center;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.owner.dark};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.gray[0]};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;
