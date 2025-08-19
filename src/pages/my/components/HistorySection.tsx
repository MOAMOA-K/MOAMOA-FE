import styled from '@emotion/styled';
import { LetterText, Ticket } from 'lucide-react';
import HistoryItem from './HistoryItem';

const HistorySection = () => {
  return (
    <Container>
      <Card>
        <HistoryItem
          icon={<LetterText />}
          title='내 피드백 내역'
          description='보낸 마음의 편지들'
        />
        <Line />
        <HistoryItem
          icon={<Ticket />}
          title='보유중인 쿠폰'
          description='현재 가지고 있는 쿠폰'
        />
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
