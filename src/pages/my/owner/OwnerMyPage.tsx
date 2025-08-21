import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import { Outlet, useLocation } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/paths';
import OwnerStatusSection from '../components/OwnerStatusSection';

const OwnerMyPage = () => {
  const location = useLocation();
  const isSubRoute = location.pathname !== ROUTE_PATH.MY_OWNER;

  return (
    <>
      {!isSubRoute ? (
        <>
          <Header title='마이페이지' />
          <Main>
            <OwnerStatusSection />
          </Main>
        </>
      ) : (
        <Outlet />
      )}
      <NavigationCustomer />
    </>
  );
};

export default OwnerMyPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.customer.background};
`;
