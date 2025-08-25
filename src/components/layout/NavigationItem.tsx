import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
      <Title>{name}</Title>
    </Container>
  );
};

export default NavigationItem;

const Container = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'type',
})<{
  active: boolean;
  type: 'customer' | 'owner';
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ active, theme, type }) =>
    active &&
    `
    color: ${type === 'customer' ? theme.colors.customer.main : theme.colors.default.blue};
  `}
  max-width: 720px;
  height: 70px;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: inherit;
`;
