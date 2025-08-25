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
    queryClient.invalidateQueries({ queryKey: ['user-detail'] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (isError || !userData) {
        navigate(ROUTE_PATH.LANDING);
        return;
      }
      if (userData?.role) {
        user?.updateRole(userData.role);
        if (userData.role === 'ROLE_CUSTOMER') {
          navigate(ROUTE_PATH.CUSTOMER);
        } else if (userData.role === 'ROLE_OWNER') {
          navigate(ROUTE_PATH.OWNER);
        }
      }
    }
  }, [userData, user, navigate, isLoading, isError]);

  if (isLoading) return null;

  if (isError || !userData) {
    return null;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainPage;
