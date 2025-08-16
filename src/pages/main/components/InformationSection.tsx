import styled from '@emotion/styled';

const InformationSection = () => {
  return (
    <Container>
      <Title>안녕하세요, 김민준님! </Title>
      <Content>오늘도 더 나은 대학가를 함께 만들어가요</Content>
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
