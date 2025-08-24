import Header from '@/components/layout/Header';
import { ROUTE_PATH } from '@/routes/paths';
import { Outlet, useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useQueryClient } from '@tanstack/react-query';

const MainPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userData, isLoading, isError } = useUser();
  const user = useAuth();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['user'] });
  }, [queryClient]);

  useEffect(() => {
    if (userData?.role) user?.updateRole(userData.role);
    if (user?.role === 'ROLE_CUSTOMER') {
      navigate(ROUTE_PATH.CUSTOMER);
    } else if (user?.role === 'ROLE_OWNER') {
      navigate(ROUTE_PATH.OWNER);
    }
  }, [user?.role, userData?.role, user, navigate]);

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
