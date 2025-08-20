import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { Star } from 'lucide-react';
import DashboardItem from './DashboardItem';

const OwnerDashboardSection = () => {
  return (
    <Container>
      <Card>
        <StoreWrapper>
          <FlexColWrapper>
            <Typography variant='title2' weight='bold' color='white'>
              카페 달빛
            </Typography>
            <Typography variant='body2' color='white'>
              카페
            </Typography>
          </FlexColWrapper>
          <FlexColWrapper>
            <StarWrapper>
              <Star fill='gold' strokeWidth={0} />
              <Typography variant='subtitle1' color='white' weight='medium'>
                4.8
              </Typography>
            </StarWrapper>
            <Typography variant='body2' color='white'>
              고객 만족도
            </Typography>
          </FlexColWrapper>
        </StoreWrapper>
        <Line />
        <ItemBox>
          <DashboardItem value={23} label='총 피드백' />
          <DashboardItem value={156} label='이번달 방문' />
          <DashboardItem value={12} label='개선 완료' />
        </ItemBox>
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
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: center;
`;

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.default.white};
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
`;
