import { ROUTE_PATH } from '@/routes/paths';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const steps = [0, 1, 2] as const;
export type Step = (typeof steps)[number];

const useStep = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(steps[0]);

  const goToNextStep = () => {
    if (step < steps.length - 1) setStep((step + 1) as Step);
    else if (step === steps.length - 1) {
      navigate(ROUTE_PATH.LOGIN);
    }
  };

  const goToPrevStep = () => {
    if (step > 0) setStep((step - 1) as Step);
  };

  return { step, stepLength: steps.length, goToNextStep, goToPrevStep };
};

export default useStep;
