import styled from '@emotion/styled';
import NavigationItem from './NavigationItem';
import { CircleUserRound, House, MapPin, Ticket } from 'lucide-react';
import { ROUTE_PATH } from '@/routes/paths';
import { useLocation } from 'react-router-dom';
import { NAV_HEIGHT } from '@/constants/number';

const NavigationCustomer = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <NavigationItem
        to={ROUTE_PATH.CUSTOMER}
        icon={<House />}
        name='대시보드'
        type='customer'
        active={pathname === ROUTE_PATH.CUSTOMER}
      />
      <NavigationItem
        to={ROUTE_PATH.MAP}
        icon={<MapPin />}
        name='지도'
        type='customer'
        active={pathname === ROUTE_PATH.MAP}
      />
      <NavigationItem
        to={ROUTE_PATH.COUPON}
        icon={<Ticket />}
        name='쿠폰 교환'
        type='customer'
        active={pathname === ROUTE_PATH.COUPON}
      />
      <NavigationItem
        to={ROUTE_PATH.MY_CUSTOMER}
        icon={<CircleUserRound />}
        name='설정'
        type='customer'
        active={
          pathname === ROUTE_PATH.MY_CUSTOMER ||
          pathname.startsWith(`${ROUTE_PATH.MY_CUSTOMER}/`)
        }
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
