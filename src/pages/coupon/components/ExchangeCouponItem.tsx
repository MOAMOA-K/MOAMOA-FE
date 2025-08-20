import Typography from '@/components/UI/Typography';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type ExchangeCouponItemProps = {
  title: string;
  description: string;
  price: number;
  point: number;
  updatePoint: (point: number) => void;
};

const ExchangeCouponItem = ({
  title,
  description,
  price,
  point,
  updatePoint,
}: ExchangeCouponItemProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Typography variant='subtitle1' weight='bold'>
        {title}
      </Typography>
      <DescriptionBox>
        <Typography variant='body2'>{description}</Typography>
      </DescriptionBox>
      <ImageDiv />
      <PriceBox>
        <Typography variant='subtitle1' weight='medium'>
          {price}p
        </Typography>
        <Button
          type='button'
          disabled={point < price}
          onClick={() => updatePoint(point - price)}
        >
          <Typography variant='body2' color={theme.colors.gray[0]}>
            교환하기
          </Typography>
        </Button>
      </PriceBox>
    </Container>
  );
};

export default ExchangeCouponItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
  gap: ${({ theme }) => theme.spacing[1]};
`;

const DescriptionBox = styled.div`
  flex-grow: 1;
`;

const ImageDiv = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.gray[20]};
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

const Button = styled.button<{ disabled: boolean }>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.customer.disabled : theme.colors.customer.main};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
`;
