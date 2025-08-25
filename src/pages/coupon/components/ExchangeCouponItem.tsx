import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';

type ExchangeCouponItemProps = {
  storeName: string;
  name: string;
  description: string;
  pointCost: number;
  validUntil: string;
  point: number;
};

const ExchangeCouponItem = ({
  storeName,
  name,
  description,
  pointCost,
  validUntil,
  point,
}: ExchangeCouponItemProps) => {
  return (
    <Container>
      <CouponBox>
        <Typography variant='title2' weight='bold'>
          {storeName}
        </Typography>
        <Typography variant='subtitle2' weight='medium'>
          {name}
        </Typography>
        <DescriptionBox>
          <Typography variant='body2'>{description}</Typography>
        </DescriptionBox>
        <Typography variant='body2' color='sub'>
          유효기간: {validUntil}
        </Typography>
      </CouponBox>
      <PriceButton
        type='button'
        onClick={() => {}}
        disabled={point < pointCost}
      >
        <Typography variant='title2' weight='medium' color='white'>
          {pointCost}p
        </Typography>
        <Typography variant='subtitle1' color='white'>
          교환하기
        </Typography>
      </PriceButton>
    </Container>
  );
};

export default ExchangeCouponItem;

const Container = styled.div`
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  gap: ${({ theme }) => theme.spacing[3]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  box-sizing: border-box;
`;

const DescriptionBox = styled.div`
  flex: 1;
`;

const CouponBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const PriceButton = styled.button<{ disabled: boolean }>`
  min-height: 100%;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[2]}`};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.customer.disabled : theme.colors.customer.main};
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  box-sizing: border-box;
`;
