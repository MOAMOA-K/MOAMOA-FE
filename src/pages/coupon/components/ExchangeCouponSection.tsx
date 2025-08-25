import styled from '@emotion/styled';
import ExchangeCouponItem from './ExchangeCouponItem';
import useCoupons from '../hooks/useCoupons';

type ExchangeCouponSectionProps = {
  point: number;
};

const ExchangeCouponSection = ({ point }: ExchangeCouponSectionProps) => {
  const { coupons, isLoading } = useCoupons();

  if (isLoading || !coupons) {
    return null;
  }

  return (
    <Container>
      {coupons.map((coupon) => (
        <ExchangeCouponItem key={coupon.id} {...coupon} point={point} />
      ))}
    </Container>
  );
};

export default ExchangeCouponSection;

const Container = styled.section`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[6]};
`;
