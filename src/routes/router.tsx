import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTE_PATH } from './paths';
import MainPage from '@/pages/main/MainPage';
import LandingPage from '@/pages/landing/LandingPage';
import LoginPage from '@/pages/login/LoginPage';
import MapPage from '@/pages/map/MapPage';
import SearchPage from '@/pages/search/SearchPage';
import StoreDetailPage from '@/pages/store/StoreDetailPage';
import LetterPage from '@/pages/letter/LetterPage';
import MyPage from '@/pages/my/MyPage';
import CouponPage from '@/pages/coupon/CouponPage';
import CustomerMainPage from '@/pages/main/customer/CustomerMainPage';
import OwnerMainPage from '@/pages/main/owner/OwnerMainPage';
import InteractionPage from '@/pages/Interaction/InteractionPage';

import CustomerMyPage from '@/pages/my/customer/CustomerMyPage';
import OwnerMyPage from '@/pages/my/owner/OwnerMyPage';
import MyCouponPage from '@/pages/my/customer/coupon/MyCouponPage';
import MyLetterPage from '@/pages/my/customer/letter/MyLetterPage';
import FeedbackPage from '@/pages/feedback/FeedbackPage';
import CompletedTab from '@/pages/feedback/components/CompletedTab';
import AllTab from '@/pages/feedback/components/AllTab';
import PendingTab from '@/pages/feedback/components/PendingTab';

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
      <Route path={ROUTE_PATH.MY} element={<MyPage />}>
        <Route path={ROUTE_PATH.MY_CUSTOMER} element={<CustomerMyPage />}>
          <Route path={ROUTE_PATH.MY_COUPON} element={<MyCouponPage />} />
          <Route path={ROUTE_PATH.MY_LETTER} element={<MyLetterPage />} />
        </Route>
        <Route path={ROUTE_PATH.MY_OWNER} element={<OwnerMyPage />} />
      </Route>
      <Route path={ROUTE_PATH.FEEDBACK} element={<FeedbackPage />}>
        <Route
          index
          element={<Navigate to={ROUTE_PATH.FEEDBACK_ALL} replace />}
        />
        <Route path={ROUTE_PATH.FEEDBACK_ALL} element={<AllTab />} />
        <Route
          path={ROUTE_PATH.FEEDBACK_COMPLETED}
          element={<CompletedTab />}
        />
        <Route path={ROUTE_PATH.FEEDBACK_PENDING} element={<PendingTab />} />
      </Route>
      <Route path={ROUTE_PATH.INTERACTION} element={<InteractionPage />} />
    </Routes>
  );
};

export default Router;
