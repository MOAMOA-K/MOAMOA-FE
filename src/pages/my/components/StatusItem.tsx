import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';

type StatusItemProps = {
  value: number;
  label: string;
};

const StatusItem = ({ value, label }: StatusItemProps) => {
  return (
    <Container>
      <Typography variant='subtitle1' weight='bold'>
        {value}
      </Typography>
      <Typography variant='body2' weight='medium'>
        {label}
      </Typography>
    </Container>
  );
};

export default StatusItem;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]};
`;
