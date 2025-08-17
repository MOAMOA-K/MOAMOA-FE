import { Routes, Route } from 'react-router';
import { ROUTE_PATH } from './paths';
import MainPage from '@/pages/main/MainPage';
import LandingPage from '@/pages/landing/LandingPage';
import LoginPage from '@/pages/login/LoginPage';
import MapPage from '@/pages/map/MapPage';
import SearchPage from '@/pages/search/SearchPage';
import StoreDetailPage from '@/pages/store/StoreDetailPage';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.HOME} element={<MainPage />} />
      <Route path={ROUTE_PATH.LANDING} element={<LandingPage />} />
      <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_PATH.MAP} element={<MapPage />} />
      <Route path={ROUTE_PATH.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE_PATH.STORE_DETAIL} element={<StoreDetailPage />} />
    </Routes>
  );
};

export default Router;
