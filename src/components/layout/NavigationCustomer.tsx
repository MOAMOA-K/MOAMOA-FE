import styled from '@emotion/styled';
import NavigationItem from './NavigationItem';
import { CircleUserRound, House, Mails, MapPin } from 'lucide-react';
import { ROUTE_PATH } from '@/routes/paths';

const NavigationCustomer = () => {
  return (
    <Nav>
      <NavigationItem to={ROUTE_PATH.HOME} icon={<House />} name='대시보드' />
      <NavigationItem to={ROUTE_PATH.MAP} icon={<MapPin />} name='지도' />
      <NavigationItem to={ROUTE_PATH.LETTER} icon={<Mails />} name='편지쓰기' />
      <NavigationItem
        to={ROUTE_PATH.MY_PAGE}
        icon={<CircleUserRound />}
        name='설정'
      />
    </Nav>
  );
};

export default NavigationCustomer;

const Nav = styled.nav`
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  max-width: 720px;
  height: 70px;
  padding: 0 ${({ theme }) => theme.spacing[10]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
