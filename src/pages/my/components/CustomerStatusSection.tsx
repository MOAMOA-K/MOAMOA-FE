import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { User } from 'lucide-react';
import StatusItem from './StatusItem';
import useUserDetail from '../hooks/useUserDetail';

const CustomerStatusSection = () => {
  const { userDetail, isLoading } = useUserDetail();

  if (isLoading || !userDetail) return null;

  return (
    <Container>
      <Card>
        <Information>
          <IconBox>
            <User size={32} />
          </IconBox>
          <InformationBox>
            <Typography variant='title2' weight='bold'>
              {userDetail.nickname}
            </Typography>
            <Typography variant='body2'>{userDetail.email}</Typography>
          </InformationBox>
        </Information>
        <Line />
        <StatusBox>
          <StatusItem value={userDetail.points} label='보유 포인트' />
          <StatusItem value={userDetail.feedbackCount} label='피드백 수' />
          <StatusItem value={userDetail.couponCount} label='보유 쿠폰수' />
        </StatusBox>
      </Card>
    </Container>
  );
};

export default CustomerStatusSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[8]}`};
  width: 100%;
  max-width: 450px;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[2]};
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.gray[30]};
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.customer.main};
`;

const StatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]};
`;
