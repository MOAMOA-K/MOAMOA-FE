import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';

type DashboardItemProps = {
  value: number;
  label: string;
};

const DashboardItem = ({ value, label }: DashboardItemProps) => {
  return (
    <Container>
      <Typography variant='title2' weight='bold' color='white'>
        {value}
      </Typography>
      <Typography variant='body1' weight='medium' color='white'>
        {label}
      </Typography>
    </Container>
  );
};

export default DashboardItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]};
`;
