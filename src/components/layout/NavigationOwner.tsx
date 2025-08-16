import styled from '@emotion/styled';
import NavigationItem from './NavigationItem';
import { CircleUserRound, Handshake, House, MapPin } from 'lucide-react';
import { ROUTE_PATH } from '@/routes/paths';
import { useLocation } from 'react-router';

const NavigationOwner = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <NavigationItem
        to={ROUTE_PATH.HOME}
        icon={<House />}
        name='대시보드'
        type='owner'
        active={pathname === ROUTE_PATH.HOME}
      />
      <NavigationItem
        to={ROUTE_PATH.FEEDBACK}
        icon={<MapPin />}
        name='피드백'
        type='owner'
        active={pathname === ROUTE_PATH.FEEDBACK}
      />
      <NavigationItem
        to={ROUTE_PATH.INTERACTION}
        icon={<Handshake />}
        name='고객소통'
        type='owner'
        active={pathname === ROUTE_PATH.INTERACTION}
      />
      <NavigationItem
        to={ROUTE_PATH.MY_PAGE}
        icon={<CircleUserRound />}
        name='설정'
        type='owner'
        active={pathname === ROUTE_PATH.MY_PAGE}
      />
    </Nav>
  );
};

export default NavigationOwner;

const Nav = styled.nav`
  position: sticky;
  bottom: 0;
  z-index: 1;
  width: 100%;
  max-width: 720px;
  height: 70px;
  padding: 0 ${({ theme }) => theme.spacing[10]};
  background-color: ${({ theme }) => theme.colors.gray[0]};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
