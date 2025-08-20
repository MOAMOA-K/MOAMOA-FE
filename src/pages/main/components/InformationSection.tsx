import styled from '@emotion/styled';

type InformationSectionProps = {
  userName: string;
  content: string;
};

const InformationSection = ({ userName, content }: InformationSectionProps) => {
  return (
    <Container>
      <Title>안녕하세요, {userName}님! </Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default InformationSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[5]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1.fontSize};
  line-height: ${({ theme }) => theme.typography.title1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.default};
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray[70]};
`;
