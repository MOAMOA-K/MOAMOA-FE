import styled from '@emotion/styled';
import { Link } from 'react-router';

type NavigationItemProps = {
  to: string;
  icon: React.ReactNode;
  name: string;
  type: 'customer' | 'owner';
  active: boolean;
};

const NavigationItem = ({
  to,
  icon,
  name,
  type,
  active,
}: NavigationItemProps) => {
  return (
    <Container to={to} active={active} type={type}>
      {icon}
      <Title active={active} type={type}>
        {name}
      </Title>
    </Container>
  );
};

export default NavigationItem;

const Container = styled(Link)<{ active: boolean; type: 'customer' | 'owner' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ active, theme, type }) =>
    active &&
    `
    color: ${type === 'customer' ? theme.colors.customer.main : theme.colors.owner.main};
  `}
  max-width: 720px;
  height: 70px;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Title = styled.p<{ active: boolean; type: 'customer' | 'owner' }>`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ active, theme, type }) =>
    active ? theme.colors[type].main : theme.colors.text.default};
`;
