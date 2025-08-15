import styled from '@emotion/styled';
import LandingSection from './components/LandingSection';
import ButtonSection from './components/ButtonSection';
import useStep from './hooks/useStep';

const LandingPage = () => {
  const { step, goToNextStep, goToPrevStep } = useStep();

  return (
    <Container>
      <LandingSection step={step} />
      <ButtonSection
        step={step}
        goToNextStep={goToNextStep}
        goToPrevStep={goToPrevStep}
      />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  height: 100dvh;
  display: flex;
  padding: ${({ theme }) => theme.spacing[5]};
  flex-direction: column;
  justify-content: space-between;
`;
