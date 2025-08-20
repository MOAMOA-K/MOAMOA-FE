import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';

type MyPointSectionProps = {
  point: number;
};

const MyPointSection = ({ point }: MyPointSectionProps) => {
  return (
    <Container>
      <Typography variant='title2' weight='bold' as='h2'>
        보유 포인트: {point}p
      </Typography>
    </Container>
  );
};

export default MyPointSection;

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[50]};
`;
