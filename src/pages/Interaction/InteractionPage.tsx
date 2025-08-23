import { useState } from 'react';
import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import { HEADER_HEIGHT } from '@/constants/number';

type Tab = 'announce' | 'coupon';

export default function InteractionPage() {
  const [tab, setTab] = useState<Tab>('announce');

  return (
    <Main>
      <Header title='고객소통' />
      <Inner>
        <TabsBar role='tablist' aria-label='고객소통 탭'>
          <TabsInner>
            <TabButton
              role='tab'
              aria-selected={tab === 'announce'}
              onClick={() => setTab('announce')}
            >
              개선사항 공유
            </TabButton>
            <TabButton
              role='tab'
              aria-selected={tab === 'coupon'}
              onClick={() => setTab('coupon')}
            >
              쿠폰 관리
            </TabButton>
            <Indicator data-tab={tab} />
          </TabsInner>
        </TabsBar>

        {tab === 'announce' ? <AnnounceSection /> : <CouponSection />}
      </Inner>
    </Main>
  );
}

/* ---------- Sections ---------- */
function AnnounceSection() {
  return (
    <Section>
      <Guide>고객 피드백을 바탕으로 개선한 내용을 공유해보세요.</Guide>

      <Card>
        <Thumb />
        <TitleRow>
          <strong>2층 좌석 공간 확장</strong>
          <Badge>피드백 5개 반영</Badge>
        </TitleRow>
        <Meta>2025-08-12</Meta>
        <Desc>
          점심시간 좌석 부족 문제 해결을 위해 2층 공간을 추가로 오픈했습니다.
        </Desc>
      </Card>

      <PrimaryButton type='button'>+ 새 개선사항 등록</PrimaryButton>
    </Section>
  );
}

function CouponSection() {
  return (
    <Section>
      <Guide>고객들에게 제공하는 쿠폰과 혜택을 관리해보세요.</Guide>

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

      <PrimaryButton type='button'>+ 새 쿠폰 만들기</PrimaryButton>
    </Section>
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

const TabsBar = styled.div`
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  z-index: 1;
  width: 100%;
  background: #fff;
`;

const TabsInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 44px 2px;
  align-items: center;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[30]};
`;

const TabButton = styled.button`
  height: 44px;
  padding-bottom: 10px;
  border: 0;
  background: transparent;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.default};
  cursor: pointer;

  &[aria-selected='true'] {
    color: ${({ theme }) => theme.colors.owner.main};
  }
`;

const Indicator = styled.div<{ 'data-tab': Tab }>`
  grid-column: ${({ ['data-tab']: t }) => (t === 'announce' ? 1 : 2)} / span 1;
  height: 1.5px;
  background: ${({ theme }) => theme.colors.owner.main};
  transition: grid-column 0.2s ease;
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

const Card = styled.article`
  border: 1px solid #ebeef2;
  border-radius: 12px;
  padding: 12px;
  background: #fff;
`;

const Thumb = styled.div`
  height: 120px;
  border-radius: 10px;
  background: repeating-linear-gradient(
    45deg,
    #f3f4f6,
    #f3f4f6 10px,
    #e5e7eb 10px,
    #e5e7eb 20px
  );
  margin-bottom: 16px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  strong {
    font-size: 16px;
  }
`;

const Badge = styled.span`
  padding: 2px 8px;
  border-radius: 20px;
  background: #f2f4f6;
  color: #4b5563;
  font-size: 12px;
`;

const Meta = styled.div`
  margin-top: 6px;
  color: #6b7280;
  font-size: 12px;
`;

const Desc = styled.p`
  margin: 16px 0 0;
  color: #111;
  font-size: 14px;
`;

const PrimaryButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  height: 44px;
  border: 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.owner.main};
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const CouponCard = styled(Card)`
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
