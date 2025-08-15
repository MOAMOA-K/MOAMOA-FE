import styled from '@emotion/styled';
import { landingData } from '../constants/landingData';
import LandingDescription from './LandingDescription';

type LandingSectionProps = {
  step: 0 | 1 | 2;
};

const LandingSection = ({ step }: LandingSectionProps) => {
  return (
    <Section>
      <Steps>
        {Array.from({ length: 3 }, (_, index) => (
          <Step key={index} selected={step === index} />
        ))}
      </Steps>
      <Title>모아모아 뀽</Title>
      <LandingDescription {...landingData[step]} />
    </Section>
  );
};

export default LandingSection;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[3]};
  flex-direction: column;
  align-items: center;
`;

const Steps = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const Step = styled.div<{ selected: boolean }>`
  width: ${({ selected }) => (selected ? '2.5rem' : '0.625rem')};
  border-radius: 3.125rem;
  height: 0.625rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.customer.main : theme.colors.gray[50]};
  transition: width 0.3s ease-in-out;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.title1.lineHeight};
  color: ${({ theme }) => theme.colors.text.default};
  padding-top: ${({ theme }) => theme.spacing[2]};
`;
