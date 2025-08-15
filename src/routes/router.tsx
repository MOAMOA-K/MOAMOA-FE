import { Routes, Route } from 'react-router';
import { ROUTE_PATH } from './paths';
import MainPage from '@/pages/main/MainPage';
import MapPage from '@/pages/main/MapPage';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.HOME} element={<MainPage />} />
      <Route path={ROUTE_PATH.MAP} element={<MapPage />} />
    </Routes>
  );
};

export default Router;
