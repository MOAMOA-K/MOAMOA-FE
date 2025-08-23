import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { Store } from 'lucide-react';

const DoneSection = ({ reply }: { reply: string }) => (
  <Card>
    <Wrapper>
      <Store />
      <Typography variant='body1' weight='medium'>
        사장님 답변
      </Typography>
    </Wrapper>
    <Typography variant='body1'>{reply}</Typography>
  </Card>
);

export default DoneSection;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.feedback.DONE};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};
  width: 100%;
  max-width: 550px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;
