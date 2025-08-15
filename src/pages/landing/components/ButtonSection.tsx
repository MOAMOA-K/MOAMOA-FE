import { ROUTE_PATH } from '@/routes/paths';
import styled from '@emotion/styled';
import { Link } from 'react-router';

type RoutingSectionProps = {
  step: 0 | 1 | 2;
  goToNextStep: () => void;
  goToPrevStep: () => void;
};

const ButtonSection = ({
  step,
  goToNextStep,
  goToPrevStep,
}: RoutingSectionProps) => {
  return (
    <Section>
      <ButtonGroup>
        {step > 0 && (
          <Button onClick={goToPrevStep} variant='outline'>
            이전
          </Button>
        )}
        <Button onClick={goToNextStep} variant='fill'>
          {step === 2 ? '시작하기' : '다음'}
        </Button>
      </ButtonGroup>
      <RouteLogin to={ROUTE_PATH.LOGIN}>
        이미 계정이 있으신가요? 로그인
      </RouteLogin>
    </Section>
  );
};

export default ButtonSection;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[3]};
  gap: ${({ theme }) => theme.spacing[8]};
`;

const ButtonGroup = styled.div`
  width: 100%;
  max-width: 31.25rem;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const Button = styled.button<{ variant?: 'outline' | 'fill' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 1rem;
  padding: ${({ theme }) => theme.spacing[2]};
  box-sizing: border-box;

  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};

  background-color: ${({ theme, variant }) =>
    variant === 'outline' ? 'transparent' : theme.colors.customer.main};
  color: ${({ theme, variant }) =>
    variant === 'outline' ? theme.colors.text.default : theme.colors.gray[0]};
  border: 2px solid
    ${({ theme, variant }) =>
      variant === 'outline' ? theme.colors.customer.main : 'transparent'};

  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const RouteLogin = styled(Link)`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  color: ${({ theme }) => theme.colors.customer.main};
  text-decoration: none;
`;
