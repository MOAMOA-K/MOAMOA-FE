import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/paths';
import OwnerStatusSection from '../components/OwnerStatusSection';
import Typography from '@/components/UI/Typography';
import NavigationOwner from '@/components/layout/NavigationOwner';

const OwnerMyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSubRoute = location.pathname !== ROUTE_PATH.MY_OWNER;

  return (
    <>
      {!isSubRoute ? (
        <>
          <Header title='마이페이지' />
          <Main>
            <OwnerStatusSection />
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
      <NavigationOwner />
    </>
  );
};

export default OwnerMyPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.owner.background};
`;

const LogoutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing[6]}`};
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.colors.owner.main};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
