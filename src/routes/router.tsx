import { Routes, Route } from 'react-router-dom';
import { ROUTE_PATH } from './paths';
import MainPage from '@/pages/main/MainPage';
import LandingPage from '@/pages/landing/LandingPage';
import LoginPage from '@/pages/login/LoginPage';
import MapPage from '@/pages/map/MapPage';
import SearchPage from '@/pages/search/SearchPage';
import StoreDetailPage from '@/pages/store/StoreDetailPage';
import LetterPage from '@/pages/letter/LetterPage';
import MyPage from '@/pages/my/MyPage';
import MyCouponPage from '@/pages/my/coupon/MyCouponPage';
import MyLetterPage from '@/pages/my/letter/MyLetterPage';
import CouponPage from '@/pages/coupon/CouponPage';
import CustomerMainPage from '@/pages/main/customer/CustomerMainPage';
import OwnerMainPage from '@/pages/main/owner/OwnerMainPage';
import InteractionPage from '@/pages/Interaction/InteractionPage';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.MAIN} element={<MainPage />}>
        <Route path={ROUTE_PATH.CUSTOMER} element={<CustomerMainPage />} />
        <Route path={ROUTE_PATH.OWNER} element={<OwnerMainPage />} />
      </Route>
      <Route path={ROUTE_PATH.LANDING} element={<LandingPage />} />
      <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_PATH.MAP} element={<MapPage />} />
      <Route path={ROUTE_PATH.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE_PATH.STORE_DETAIL} element={<StoreDetailPage />} />
      <Route path={ROUTE_PATH.LETTER} element={<LetterPage />} />
      <Route path={ROUTE_PATH.COUPON} element={<CouponPage />} />
      <Route path={ROUTE_PATH.MY_PAGE} element={<MyPage />}>
        <Route path={ROUTE_PATH.MY_COUPON} element={<MyCouponPage />} />
        <Route path={ROUTE_PATH.MY_LETTER} element={<MyLetterPage />} />
      </Route>

      <Route path={ROUTE_PATH.INTERACTION} element={<InteractionPage />} />
    </Routes>
  );
};

export default Router;
