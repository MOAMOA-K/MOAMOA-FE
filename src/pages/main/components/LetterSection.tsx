import { ROUTE_PATH } from '@/routes/paths';
import styled from '@emotion/styled';
import { Mail } from 'lucide-react';
import { Link } from 'react-router';

const LetterSection = () => {
  return (
    <Container>
      <Card to={ROUTE_PATH.LETTER}>
        <IconBox>
          <Mail />
        </IconBox>
        <Flex>
          <Title>마음의 편지</Title>
          <Content>익명 피드백 보내기</Content>
        </Flex>
      </Card>
    </Container>
  );
};

export default LetterSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Card = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[6]}`};
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray[30]};
  border-radius: 50%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.typography.title2.fontSize};
  line-height: ${({ theme }) => theme.typography.title2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.default};
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray[70]};
`;
