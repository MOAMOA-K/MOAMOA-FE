// src/pages/owner/InteractionPage.tsx
import styled from '@emotion/styled';
import Header from '@/components/layout/Header';
import NavigationOwner from '@/components/layout/NavigationOwner';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';

import { useEffect, useState, type FormEvent } from 'react';
import { createCoupon, type CreateCouponBody } from '@/api/coupon/postCoupons';
import { getStoreMy } from '@/api/store/getStoreMy';
import {
  getCouponsByStore,
  type StoreCoupon,
} from '@/api/coupon/getCouponsByStore';

export default function InteractionPage() {
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverMsg, setServerMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [storeId, setStoreId] = useState<number | null>(null);

  // ✅ 신규: 쿠폰 리스트 상태
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [coupons, setCoupons] = useState<StoreCoupon[]>([]);

  const [form, setForm] = useState({
    name: '',
    description: '',
    pointCost: '',
    validUntil: '', // yyyy-MM-dd
    password: '',
  });

  // ✅ 마운트 시 내 매장 정보 + 쿠폰 목록 불러오기
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setCouponLoading(true);
        setCouponError(null);

        const mine = await getStoreMy(); // { id: number, ... }
        if (!alive) return;

        setStoreId(mine.id);

        const list = await getCouponsByStore(mine.id);
        if (!alive) return;

        setCoupons(list);
      } finally {
        if (alive) setCouponLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // 기존 “+ 새 쿠폰 만들기” 눌렀을 때: 폼 열고 storeId 보장
  const openCreateForm = async () => {
    setOpenForm(true);
    setError(null);
    setServerMsg(null);
    // storeId가 이미 있으면 다시 요청 안 해도 됨 (유지)
    if (storeId != null) return;

    setLoading(true);
    try {
      const mine = await getStoreMy();
      setStoreId(mine.id);
    } finally {
      setLoading(false);
    }
  };

  // 저장(쿠폰 생성)
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setServerMsg(null);

    if (storeId == null) {
      setError(
        '가게 정보를 먼저 불러올 수 없습니다. 잠시 후 다시 시도해주세요.',
      );
      return;
    }

    const costNum = Number(form.pointCost);
    if (!form.name || form.name.length > 100) {
      setError('쿠폰명은 1~100자로 입력해주세요.');
      return;
    }
    if (form.description.length > 500) {
      setError('설명은 500자 이내로 입력해주세요.');
      return;
    }
    if (!Number.isFinite(costNum) || costNum < 0) {
      setError('포인트 비용은 0 이상 숫자로 입력해주세요.');
      return;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(form.validUntil)) {
      setError('유효기간은 yyyy-MM-dd 형식으로 입력해주세요.');
      return;
    }
    if (!form.password.trim()) {
      setError('패스워드를 입력해주세요.');
      return;
    }

    const payload: CreateCouponBody = {
      storeId,
      name: form.name.trim(),
      description: form.description.trim(),
      password: form.password.trim(), // ✅ 문자열로 보장
      pointCost: costNum,
      validUntil: form.validUntil,
    };

    try {
      setLoading(true);
      const msg = await createCoupon(payload);
      setServerMsg(msg || '쿠폰이 생성되었습니다.');
      setForm({
        name: '',
        description: '',
        pointCost: '',
        validUntil: '',
        password: '',
      });
      setOpenForm(false);

      // ✅ 생성 성공 후 목록 갱신
      setCouponLoading(true);
      const list = await getCouponsByStore(storeId);
      setCoupons(list);
    } finally {
      setLoading(false);
      setCouponLoading(false);
    }
  };

  return (
    <>
      <Main>
        <Header title='고객소통' />
        <Inner>
          <Section>
            <Guide>고객들에게 제공하는 쿠폰과 혜택을 관리해보세요.</Guide>

            {/* ✅ 서버에서 불러온 쿠폰 목록 표시 (UI는 그대로) */}
            {couponLoading && <Meta>쿠폰 목록을 불러오는 중…</Meta>}
            {couponError && (
              <Meta style={{ color: '#dc2626' }}>{couponError}</Meta>
            )}

            {!couponLoading &&
              !couponError &&
              coupons.map((c) => (
                <CouponCard key={c.id}>
                  <div className='head'>
                    <strong>{c.name}</strong>
                    {/* 사용량 정보가 없으니 임시 표기 */}
                    <span className='usage'>
                      {c.pointCost.toLocaleString()}P
                    </span>
                  </div>
                  <Meta>유효기간: {c.validUntil}</Meta>
                  <Bar>
                    {/* 진행률 정보가 없으므로 0% 고정 (UI 유지용) */}
                    <i style={{ width: '0%' }} />
                  </Bar>
                  <RowActions>
                    <SecondaryButton type='button' disabled>
                      수정
                    </SecondaryButton>
                    <GhostButton type='button' disabled>
                      일시중지
                    </GhostButton>
                  </RowActions>
                </CouponCard>
              ))}

            {/* 기존 샘플 카드는 제거/주석 처리해 테스트 집중 */}

            {!openForm && (
              <PrimaryButton type='button' onClick={openCreateForm}>
                + 새 쿠폰 만들기
              </PrimaryButton>
            )}

            {openForm && (
              <FormCard onSubmit={onSubmit}>
                <h3>새 쿠폰 만들기</h3>

                <ReadOnlyRow>
                  <span>매장 ID</span>
                  <code>{storeId ?? '불러오는 중...'}</code>
                </ReadOnlyRow>

                <Grid>
                  <label>
                    쿠폰명
                    <input
                      type='text'
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder='신규 오픈 기념 2천P 쿠폰'
                      maxLength={100}
                      required
                    />
                  </label>

                  <label>
                    설명
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, description: e.target.value }))
                      }
                      placeholder='전 메뉴 사용 가능, 포장/배달 제외'
                      maxLength={500}
                    />
                  </label>

                  <label>
                    포인트 비용
                    <input
                      type='number'
                      min={0}
                      value={form.pointCost}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, pointCost: e.target.value }))
                      }
                      placeholder='예: 2000'
                      required
                    />
                  </label>

                  <label>
                    유효기간
                    <input
                      type='date'
                      value={form.validUntil}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, validUntil: e.target.value }))
                      }
                      required
                    />
                  </label>

                  <label>
                    패스워드
                    <input
                      type='password' // ✅ 문자열 유지, 앞자리 0 보존
                      inputMode='numeric'
                      value={form.password}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, password: e.target.value }))
                      }
                      placeholder='예: 1234'
                      required
                    />
                  </label>
                </Grid>

                {error && <ErrorMsg>{error}</ErrorMsg>}
                {serverMsg && <SuccessMsg>{serverMsg}</SuccessMsg>}

                <RowActions>
                  <SecondaryButton
                    type='submit'
                    disabled={loading || storeId == null}
                  >
                    {loading ? '저장 중…' : '저장'}
                  </SecondaryButton>
                  <GhostButton
                    type='button'
                    onClick={() => {
                      setOpenForm(false);
                      setError(null);
                      setServerMsg(null);
                    }}
                  >
                    취소
                  </GhostButton>
                </RowActions>
              </FormCard>
            )}
          </Section>

          <BottomSpacer />
        </Inner>
      </Main>

      <NavigationOwner />
    </>
  );
}

/* ---------- styles (기존 그대로) ---------- */
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
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
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

const FormCard = styled.form`
  border: 1px solid #ebeef2;
  border-radius: 12px;
  padding: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  h3 {
    margin: 0 0 6px;
    font-size: 16px;
  }
  label {
    display: grid;
    gap: 6px;
    font-size: 13px;
    color: #374151;
  }
  input,
  textarea {
    border: 1px solid #cfd6de;
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 14px;
    background: #fff;
  }
  textarea {
    min-height: 72px;
    resize: vertical;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
`;

const ErrorMsg = styled.div`
  color: #dc2626;
  font-size: 12px;
`;

const SuccessMsg = styled.div`
  color: #059669;
  font-size: 12px;
`;

const ReadOnlyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  border: 1px dashed #cfd6de;
  border-radius: 10px;
  background: #fafafa;
  font-size: 13px;
  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
`;
