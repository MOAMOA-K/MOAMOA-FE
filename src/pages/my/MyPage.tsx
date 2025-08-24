import { useAuth } from '@/contexts/AuthContext';
import { ROUTE_PATH } from '@/routes/paths';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export type LogoutType = {
  logout: () => void;
};

const MyPage = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const logout = () => {
    user?.removeAccessToken();
  };
  useEffect(() => {
    if (!user?.accessToken) {
      navigate(ROUTE_PATH.LOGIN);
    }
  }, [user?.accessToken, navigate]);

  return (
    <>
      <Outlet context={{ logout }} />
    </>
  );
};

export default MyPage;
