import { Routes, Route } from 'react-router';
import { ROUTE_PATH } from './paths';
import MainPage from '@/pages/main/MainPage';
import LandingPage from '@/pages/landing/LandingPage';
import LoginPage from '@/pages/login/LoginPage';
import MapPage from '@/pages/map/MapPage';
import LetterPage from '@/pages/letter/LetterPage';
import MyPage from '@/pages/my/MyPage';
import MyCouponPage from '@/pages/my/coupon/MyCouponPage';
import MyLetterPage from '@/pages/my/letter/MyLetterPage';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.HOME} element={<MainPage />} />
      <Route path={ROUTE_PATH.LANDING} element={<LandingPage />} />
      <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_PATH.MAP} element={<MapPage />} />
      <Route path={ROUTE_PATH.LETTER} element={<LetterPage />} />
      <Route path={ROUTE_PATH.MY_PAGE} element={<MyPage />}>
        <Route path={ROUTE_PATH.MY_COUPON} element={<MyCouponPage />} />
        <Route path={ROUTE_PATH.MY_LETTER} element={<MyLetterPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
