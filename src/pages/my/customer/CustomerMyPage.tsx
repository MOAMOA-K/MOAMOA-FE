import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import Typography from '@/components/UI/Typography';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/paths';
import StatusSection from '../components/StatusSection';
import HistorySection from '../components/HistorySection';

const CustomerMyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSubRoute = location.pathname !== ROUTE_PATH.MY_CUSTOMER;

  return (
    <>
      {!isSubRoute ? (
        <>
          <Header title='마이페이지' />
          <Main>
            <StatusSection />
            <HistorySection />
            <LogoutSection>
              <LogoutButton onClick={() => navigate(ROUTE_PATH.LOGIN)}>
                <Typography variant='body2' color='white'>
                  로그아웃
                </Typography>
              </LogoutButton>
            </LogoutSection>
          </Main>
        </>
      ) : (
        <Outlet />
      )}
      <NavigationCustomer />
    </>
  );
};

export default CustomerMyPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.customer.background};
`;

const LogoutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.colors.customer.main};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
