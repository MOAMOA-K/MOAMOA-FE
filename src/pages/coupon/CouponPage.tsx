import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import MyPointSection from './components/MyPointSection';
import ExchangeCouponSection from './components/ExchangeCouponSection';
import useUser from '../main/hooks/useUser';

const CouponPage = () => {
  const { userData, isLoading } = useUser();

  if (isLoading || !userData) {
    return null;
  }

  return (
    <>
      <Header title='쿠폰 교환하기' />
      <Main>
        <MyPointSection point={userData.points} />
        <ExchangeCouponSection point={userData.points} />
      </Main>
      <NavigationCustomer />
    </>
  );
};

export default CouponPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.customer.background};
`;
