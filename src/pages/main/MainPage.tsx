import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainPage;
