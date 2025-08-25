import styled from '@emotion/styled';

type LandingDescriptionProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const LandingDescription = ({
  imageUrl,
  title,
  description,
}: LandingDescriptionProps) => {
  return (
    <Container>
      <Img src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default LandingDescription;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Img = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.title1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.title1.lineHeight};
  color: ${({ theme }) => theme.colors.text.default};
  text-align: center;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  color: ${({ theme }) => theme.colors.text.default};
  text-align: center;
`;
