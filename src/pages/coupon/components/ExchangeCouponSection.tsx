import styled from '@emotion/styled';
import ExchangeCouponItem from './ExchangeCouponItem';
import { exchangeCoupon } from '../constants/coupon';

type ExchangeCouponSectionProps = {
  point: number;
  updatePoint: (point: number) => void;
};

const ExchangeCouponSection = ({
  point,
  updatePoint,
}: ExchangeCouponSectionProps) => {
  return (
    <Container>
      {exchangeCoupon.map((coupon) => (
        <ExchangeCouponItem
          key={coupon.id}
          {...coupon}
          point={point}
          updatePoint={updatePoint}
        />
      ))}
    </Container>
  );
};

export default ExchangeCouponSection;

const Container = styled.section`
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[6]};
`;
