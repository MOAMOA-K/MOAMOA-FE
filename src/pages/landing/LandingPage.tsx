import styled from '@emotion/styled';

const LandingPage = () => {
  return <Container></Container>;
};

export default LandingPage;

const Container = styled.div`
  height: 100dvh;
  display: flex;
  padding: ${({ theme }) => theme.spacing[5]};
  flex-direction: column;
  justify-content: space-between;
`;
