import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { ChevronRight } from 'lucide-react';
import type React from 'react';

type HistoryItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const HistoryItem = ({ icon, title, description }: HistoryItemProps) => {
  return (
    <Container>
      <IconBox>{icon}</IconBox>
      <TextBox>
        <Typography variant='subtitle1' weight='bold'>
          {title}
        </Typography>
        <Typography variant='body2'>{description}</Typography>
      </TextBox>
      <ChevronRight />
    </Container>
  );
};

export default HistoryItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.gray[50]};
`;

const TextBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;
