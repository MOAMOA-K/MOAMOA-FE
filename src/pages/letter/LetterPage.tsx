import Header from '@/components/layout/Header';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import UploadSection from './components/UploadSection';
import useFile from './hooks/useFile';
import LetterSendSection from './components/LetterSendSection';
import { useState, type FormEvent } from 'react';
import type { LetterTagType } from '@/constants/letter';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/paths';
import {
  createFeedback,
  type FeedbackType,
  type CreateFeedbackRequest,
} from '@/api/feedback/postFeedback';

const LetterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { uploadedFile, isUploaded, handleFileChange } = useFile();

  const [formData, setFormData] = useState<{
    satisfaction: number;
    letterTag: LetterTagType; // 'positive' | 'suggestion' | 'complaint' 라고 가정
    letterText: string;
  }>({
    satisfaction: 0,
    letterTag: 'COMPLIMENT',
    letterText: '',
  });

  const [, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // StoreDetailPage에서 넘겨준 값 복구 (state 또는 query)
  const search = new URLSearchParams(location.search);
  const storeIdFromQuery = search.get('storeId');
  const receiptIdFromQuery = search.get('receiptId');

  const storeId: number | undefined =
    (location.state as { storeId?: number } | null)?.storeId ??
    (storeIdFromQuery ? Number(storeIdFromQuery) : undefined);

  const receiptId: number | undefined =
    (location.state as { receiptId?: number } | null)?.receiptId ??
    (receiptIdFromQuery ? Number(receiptIdFromQuery) : undefined);

  const typeMap: Record<LetterTagType, FeedbackType> = {
    COMPLIMENT: 'COMPLIMENT',
    SUGGESTION: 'SUGGESTION',
    COMPLAINT: 'COMPLAINT',
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // 기본 검증
    if (!storeId) {
      setError('가게 정보가 없습니다.');
      alert('가게 정보가 없습니다.');
      return;
    }
    if (
      !formData.satisfaction ||
      formData.satisfaction < 1 ||
      formData.satisfaction > 5
    ) {
      setError('별점을 선택해 주세요.');
      alert('별점을 선택해 주세요.');
      return;
    }
    if (!formData.letterText.trim()) {
      setError('내용을 입력해 주세요.');
      alert('내용을 입력해 주세요.');
      return;
    }

    const rid = Number(receiptId);
    const payload: CreateFeedbackRequest = {
      storeId, // number
      receiptId: rid,
      rating: formData.satisfaction, // number
      content: formData.letterText.trim(), // string
      type: typeMap[formData.letterTag], // FeedbackType
    };

    try {
      setSubmitting(true);

      if (import.meta.env.DEV) {
        console.group('[Letter] createFeedback payload');
        console.log(payload);
        console.log('uploadedFile (클라이언트만):', uploadedFile);
        console.groupEnd();
      }

      const res = await createFeedback(payload);
      alert(res?.message ?? '피드백이 등록되었습니다.');
      navigate(ROUTE_PATH.MAIN, { replace: true });
    } catch (err) {
      if (import.meta.env.DEV) console.error('[Letter] submit error:', err);
      setError('전송 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요.');
      alert('전송 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요.');
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
              // 내부 전송 버튼이 있다면 submitting을 내려서 disabled 처리 가능
              // disabled={submitting}
            />
          )}
          {error && <ErrorMsg>{error}</ErrorMsg>}
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
const ErrorMsg = styled.p`
  margin: 0;
  color: #d00;
  font-size: 13px;
`;
