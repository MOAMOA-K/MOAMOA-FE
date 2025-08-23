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

        {/* 다음 커밋에서 섹션이 들어옵니다 */}
      </Inner>
    </Main>
  );
}

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
