import styled from '@emotion/styled';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Background>
      <Container>{children}</Container>
    </Background>
  );
};

export default AppLayout;

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 720px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
`;
