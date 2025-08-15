import styled from '@emotion/styled';
import LandingSection from './components/LandingSection';
import ButtonSection from './components/ButtonSection';
import useStep from './hooks/useStep';

const LandingPage = () => {
  const { step, stepLength, goToNextStep, goToPrevStep } = useStep();

  return (
    <Container>
      <LandingSection step={step} stepLength={stepLength} />
      <ButtonSection
        step={step}
        stepLength={stepLength}
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
