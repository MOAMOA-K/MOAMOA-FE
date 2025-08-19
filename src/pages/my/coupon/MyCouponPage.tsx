import Header from '@/components/layout/Header';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import MyCouponItem from '../components/MyCouponItem';
import { couponItems } from '../constants/history-item';

const MyCouponPage = () => {
  return (
    <>
      <Header title='보유중인 쿠폰' />
      <Main>
        <MyCouponSection>
          {couponItems.map((item) => (
            <MyCouponItem key={item.id} {...item} />
          ))}
        </MyCouponSection>
      </Main>
    </>
  );
};

export default MyCouponPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: #fcfcfc;
`;

const MyCouponSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[6]};
`;
