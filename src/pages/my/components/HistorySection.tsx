import styled from '@emotion/styled';
import { LetterText, Ticket } from 'lucide-react';
import HistoryItem from './HistoryItem';
import { Link } from 'react-router';
import { ROUTE_PATH } from '@/routes/paths';

const HistorySection = () => {
  return (
    <Container>
      <Card>
        <Link to={ROUTE_PATH.MY_LETTER}>
          <HistoryItem
            icon={<LetterText />}
            title='내 피드백 내역'
            description='보낸 마음의 편지들'
          />
        </Link>
        <Line />
        <Link to={ROUTE_PATH.MY_COUPON}>
          <HistoryItem
            icon={<Ticket />}
            title='보유중인 쿠폰'
            description='현재 가지고 있는 쿠폰'
          />
        </Link>
      </Card>
    </Container>
  );
};

export default HistorySection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `0 ${theme.spacing[6]}`};
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[8]}`};
  width: 100%;
  max-width: 450px;
`;

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.customer.main};
`;
