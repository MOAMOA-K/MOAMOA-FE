import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import NavigationOwner from '@/components/layout/NavigationOwner';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';

export default function InteractionPage() {
  return (
    <>
      <Main>
        <Header title='고객소통' />
        <Inner>
          <Section>
            <Guide>고객들에게 제공하는 쿠폰과 혜택을 관리해보세요.</Guide>

            {/* 샘플 쿠폰 카드 1 */}
            <CouponCard>
              <div className='head'>
                <strong>단골 고객 10% 할인</strong>
                <span className='usage'>23/50 사용됨</span>
              </div>
              <Meta>유효기간: 2025-08-21</Meta>
              <Bar>
                <i style={{ width: '46%' }} />
              </Bar>
              <RowActions>
                <SecondaryButton type='button'>수정</SecondaryButton>
                <GhostButton type='button'>일시중지</GhostButton>
              </RowActions>
            </CouponCard>

            {/* 샘플 쿠폰 카드 2 (원하면 삭제) */}
            <CouponCard>
              <div className='head'>
                <strong>신메뉴 출시 기념 20% 할인</strong>
                <span className='usage'>15/30 사용됨</span>
              </div>
              <Meta>유효기간: 2025-08-20</Meta>
              <Bar>
                <i style={{ width: '33%' }} />
              </Bar>
              <RowActions>
                <SecondaryButton type='button'>수정</SecondaryButton>
                <GhostButton type='button'>일시중지</GhostButton>
              </RowActions>
            </CouponCard>
            {/* 샘플 쿠폰 카드 2 (원하면 삭제) */}
            <CouponCard>
              <div className='head'>
                <strong>신메뉴 출시 기념 20% 할인</strong>
                <span className='usage'>15/30 사용됨</span>
              </div>
              <Meta>유효기간: 2025-08-20</Meta>
              <Bar>
                <i style={{ width: '33%' }} />
              </Bar>
              <RowActions>
                <SecondaryButton type='button'>수정</SecondaryButton>
                <GhostButton type='button'>일시중지</GhostButton>
              </RowActions>
            </CouponCard>

            <PrimaryButton type='button'>+ 새 쿠폰 만들기</PrimaryButton>
          </Section>

          {/* 하단 네비와 겹침 방지 여백 */}
          <BottomSpacer />
        </Inner>
      </Main>

      <NavigationOwner />
    </>
  );
}

/* ---------- styles ---------- */
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.owner.background};
`;

const Inner = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.owner.background};
`;

const Section = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Guide = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.colors.gray[0]};
  border: 1px solid ${({ theme }) => theme.colors.gray[10]};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text.default};
  font-size: 13px;
`;

const CouponCard = styled.article`
  border: 1px solid #ebeef2;
  border-radius: 12px;
  padding: 12px;
  background: #fff;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 16px;
    }
    .usage {
      color: #6b7280;
      font-size: 12px;
    }
  }
`;

const Meta = styled.div`
  margin-top: 6px;
  color: #6b7280;
  font-size: 12px;
`;

const Bar = styled.div`
  height: 8px;
  border-radius: 999px;
  background: #f1f5f9;
  overflow: hidden;
  margin: 10px 0;

  i {
    display: block;
    height: 100%;
    background: ${({ theme }) => theme.colors.owner.main};
  }
`;

const RowActions = styled.div`
  display: flex;
  gap: 8px;
`;

const PrimaryButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding: 0 15px;
  border: 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.owner.main};
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const SecondaryButton = styled.button`
  flex: none;
  height: 36px;
  padding: 0 12px;
  border-radius: 16px;
  border: 1px solid #cfd6de;
  background: #fff;
  color: #111;
  cursor: pointer;
`;

const GhostButton = styled.button`
  flex: none;
  height: 36px;
  padding: 0 12px;
  border-radius: 10px;
  border: 0;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
`;

const BottomSpacer = styled.div`
  height: ${NAV_HEIGHT}px;
`;
