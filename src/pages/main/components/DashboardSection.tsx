import { ROUTE_PATH } from '@/routes/paths';
import styled from '@emotion/styled';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const DashboardSection = () => {
  return (
    <Container>
      <Card>
        <SubTitle>내 포인트</SubTitle>
        <Point>1250P</Point>
        <UpdateInfo>이번 주 + 120P 적립</UpdateInfo>
        <Button to={ROUTE_PATH.COUPON}>
          쿠폰 교환하기
          <ArrowRight />
        </Button>
      </Card>
    </Container>
  );
};

export default DashboardSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.customer.main};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[6]}`};
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[0]};
`;

const Point = styled.p`
  font-size: ${({ theme }) => theme.typography.title1.fontSize};
  line-height: ${({ theme }) => theme.typography.title1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[0]};
`;

const UpdateInfo = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray[0]};
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.customer.dark};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.gray[0]};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;
