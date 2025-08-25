import Header from '@/components/layout/Header';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import UploadSection from './components/UploadSection';
import useFile from './hooks/useFile';
import LetterSendSection from './components/LetterSendSection';
import { useMemo, useState, type FormEvent } from 'react';
import type { LetterTagType } from '@/constants/letter';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/paths';
import { uploadReceiptOcr } from '@/api/receipt/receipt';
import {
  createFeedback,
  type CreateFeedbackRequest,
  type FeedbackType,
} from '@/api/feedback/postFeedback';
import { useQueryClient } from '@tanstack/react-query';

// LetterTagType -> FeedbackType 매핑
const typeMap: Record<LetterTagType, FeedbackType> = {
  COMPLIMENT: 'COMPLIMENT',
  SUGGESTION: 'SUGGESTION',
  COMPLAINT: 'COMPLAINT',
};

const LetterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  // StoreDetailPage에서 넘겨준 storeId는 state 또는 query에 실려있음
  const storeId = useMemo(() => {
    const s = (location.state as { storeId?: number } | null)?.storeId;
    if (typeof s === 'number' && Number.isFinite(s)) return s;

    const qs = new URLSearchParams(location.search);
    const q = Number(qs.get('storeId'));
    return Number.isFinite(q) ? q : null;
  }, [location.state, location.search]);

  const { uploadedFile, isUploaded, handleFileChange } = useFile();
  const [formData, setFormData] = useState<{
    satisfaction: number;
    letterTag: LetterTagType;
    letterText: string;
  }>({
    satisfaction: 0,
    letterTag: 'COMPLIMENT',
    letterText: '',
  });

  const [, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    // 1) 선행 유효성
    if (storeId == null) {
      setErrorMsg('가게 정보가 없습니다. 다시 시도해주세요.');
      return;
    }
    if (!isUploaded || !uploadedFile) {
      setErrorMsg('영수증 이미지를 먼저 업로드해주세요.');
      return;
    }
    if (!formData.letterText.trim()) {
      setErrorMsg('내용을 입력해주세요.');
      return;
    }

    setSubmitting(true);
    try {
      // 2) 영수증 OCR 업로드 → receiptId 발급
      const ocr = await uploadReceiptOcr(uploadedFile);
      const receiptId = ocr.id;

      // 3) 피드백 생성 payload
      const payload: CreateFeedbackRequest = {
        storeId,
        receiptId,
        rating: formData.satisfaction,
        content: formData.letterText.trim(),
        type: typeMap[formData.letterTag],
      };

      // 4) 피드백 전송
      await createFeedback(payload);

      queryClient.invalidateQueries({ queryKey: ['feedback-my', storeId] });

      // 5) 성공 이동
      navigate(ROUTE_PATH.MAIN, { replace: true });
    } catch (err: unknown) {
      // any 금지 → unknown으로 받고 메시지 최소화
      setErrorMsg('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      // 필요 시 개발모드에서만 상세 로그
      if (import.meta.env.DEV) console.error('[Letter] submit error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header title='마음의 편지' />
      <Main>
        <Form onSubmit={handleSubmit}>
          {!isUploaded ? (
            <UploadSection
              isUploaded={isUploaded}
              onFileChange={handleFileChange}
            />
          ) : (
            <LetterSendSection
              satisfaction={formData.satisfaction}
              letterTag={formData.letterTag}
              letterText={formData.letterText}
              setFormData={setFormData}
            />
          )}

          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
        </Form>
      </Main>
      <NavigationCustomer />
    </>
  );
};

export default LetterPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.customer.background};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ErrorText = styled.p`
  margin: 0;
  color: #d32f2f;
  font-size: 13px;
`;
