import styled from '@emotion/styled';
import NavigationItem from './NavigationItem';
import { CircleUserRound, House, Mails, MapPin } from 'lucide-react';
import { ROUTE_PATH } from '@/routes/paths';
import { useLocation } from 'react-router';
import { NAV_HEIGHT } from '@/constants/number';

const NavigationCustomer = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <NavigationItem
        to={ROUTE_PATH.HOME}
        icon={<House />}
        name='대시보드'
        type='customer'
        active={pathname === ROUTE_PATH.HOME}
      />
      <NavigationItem
        to={ROUTE_PATH.MAP}
        icon={<MapPin />}
        name='지도'
        type='customer'
        active={pathname === ROUTE_PATH.MAP}
      />
      <NavigationItem
        to={ROUTE_PATH.LETTER}
        icon={<Mails />}
        name='편지쓰기'
        type='customer'
        active={pathname === ROUTE_PATH.LETTER}
      />
      <NavigationItem
        to={ROUTE_PATH.MY_PAGE}
        icon={<CircleUserRound />}
        name='설정'
        type='customer'
        active={pathname === ROUTE_PATH.MY_PAGE}
      />
    </Nav>
  );
};

export default NavigationCustomer;

const Nav = styled.nav`
  position: sticky;
  bottom: 0;
  z-index: 1;
  width: 100%;
  max-width: 720px;
  height: ${NAV_HEIGHT}px;
  padding: 0 ${({ theme }) => theme.spacing[10]};
  background-color: ${({ theme }) => theme.colors.gray[0]};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
