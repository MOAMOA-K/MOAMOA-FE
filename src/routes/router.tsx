import { Routes, Route } from 'react-router';
import { ROUTE_PATH } from './paths';
import MainPage from '@/pages/main/MainPage';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.HOME} element={<MainPage />} />
    </Routes>
  );
};

export default Router;
