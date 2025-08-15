import { ROUTE_PATH } from '@/routes/paths';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const steps = [0, 1, 2] as const;
type Step = (typeof steps)[number];

const useStep = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(steps[0]);

  const goToNextStep = () => {
    if (step < 2) setStep((step + 1) as Step);
    else if (step === 2) {
      navigate(ROUTE_PATH.LOGIN);
    }
  };

  const goToPrevStep = () => {
    if (step > 0) setStep((step - 1) as Step);
  };

  return { step, goToNextStep, goToPrevStep };
};

export default useStep;
