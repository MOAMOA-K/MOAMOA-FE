import Header from '@/components/layout/Header';
import { ROUTE_PATH } from '@/routes/paths';
import { Outlet, useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';
import { useEffect } from 'react';

const MainPage = () => {
  const navigate = useNavigate();
  const { userData, isLoading, isError } = useUser();
  useEffect(() => {
    if (userData?.role === 'ROLE_CUSTOMER') {
      navigate(ROUTE_PATH.CUSTOMER);
    } else if (userData?.role === 'ROLE_OWNER') {
      navigate(ROUTE_PATH.OWNER);
    }
  }, [userData, navigate]);

  if (isLoading) return <div>Loading...</div>;

  if (isError || !userData) {
    navigate(ROUTE_PATH.LANDING);
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainPage;
