import Typography from '@/components/UI/Typography';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type MyCouponItemProps = {
  name: string;
  date: string;
  content: string;
};

const MyCouponItem = ({ name, date, content }: MyCouponItemProps) => {
  const theme = useTheme();

  return (
    <Card>
      <TitleBox>
        <Typography variant='title2' weight='bold'>
          {name}
        </Typography>
        <Typography variant='body2' color={theme.colors.gray[70]}>
          {date}
        </Typography>
      </TitleBox>
      <Typography variant='body1'>{content}</Typography>
      <ButtonBox>
        <Button>사용하기</Button>
      </ButtonBox>
    </Card>
  );
};

export default MyCouponItem;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray[0]};
  border: 1px solid ${({ theme }) => theme.colors.gray[20]};
  gap: ${({ theme }) => theme.spacing[2]};
  border-radius: 12px;
  padding: 16px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.customer.main};
  color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 16px;
  padding: ${({ theme }) => `${theme.spacing[2]}  ${theme.spacing[4]}`};
  cursor: pointer;
`;
