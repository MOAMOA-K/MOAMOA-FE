import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { useState } from 'react';

type MyCouponItemProps = {
  userCouponId: number;
  storeName: string;
  description: string;
  couponName: string;
  validUntil: string;
  createdAt: string;
};

const MyCouponItem = ({
  storeName,
  couponName,
  description,
  validUntil,
}: MyCouponItemProps) => {
  const [password, setPassword] = useState('');

  return (
    <form>
      <Card>
        <CouponBox>
          <Typography variant='title2' weight='bold'>
            {storeName}
          </Typography>
          <Typography variant='subtitle2' weight='medium'>
            {couponName}
          </Typography>
          <DescriptionBox>
            <Typography variant='body2'>{description}</Typography>
          </DescriptionBox>
          <Input
            placeholder='쿠폰번호'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Typography variant='body2' color='sub'>
            유효기간: {validUntil}
          </Typography>
        </CouponBox>
        <PriceButton
          type='button'
          disabled={password.length === 0}
          onClick={() => {}}
        >
          <Typography variant='subtitle1' color='white'>
            교환하기
          </Typography>
        </PriceButton>
      </Card>
    </form>
  );
};

export default MyCouponItem;

const Card = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[8]}`};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.customer.disabled : theme.colors.customer.main};
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  box-sizing: border-box;
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[70]};
`;
