import styled from '@emotion/styled';
import NavigationItem from './NavigationItem';
import { CircleUserRound, Handshake, House, MapPin } from 'lucide-react';
import { ROUTE_PATH } from '@/routes/paths';

const NavigationOwner = () => {
  return (
    <Nav>
      <NavigationItem to={ROUTE_PATH.HOME} icon={<House />} name='대시보드' />
      <NavigationItem
        to={ROUTE_PATH.FEEDBACK}
        icon={<MapPin />}
        name='피드백'
      />
      <NavigationItem
        to={ROUTE_PATH.INTERACTION}
        icon={<Handshake />}
        name='고객소통'
      />
      <NavigationItem
        to={ROUTE_PATH.MY_PAGE}
        icon={<CircleUserRound />}
        name='설정'
      />
    </Nav>
  );
};

export default NavigationOwner;

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
