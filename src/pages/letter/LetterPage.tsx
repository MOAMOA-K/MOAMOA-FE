import Header from '@/components/layout/Header';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import UploadSection from './components/UploadSection';
import useFile from './hooks/useFile';
import LetterSendSection from './components/LetterSendSection';
import { useState, type FormEvent } from 'react';
import type { LetterTagType } from './constants/letter';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/routes/paths';

const LetterPage = () => {
  const navigate = useNavigate();
  const { uploadedFile, isUploaded, handleFileChange } = useFile();
  const [formData, setFormData] = useState<{
    satisfaction: number;
    letterTag: LetterTagType;
    letterText: string;
  }>({
    satisfaction: 0,
    letterTag: 'positive',
    letterText: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 실제 서버 전송 대신 상태로 확인
    console.log('폼 데이터:', uploadedFile);
    console.log('제출됨:', formData);

    navigate(ROUTE_PATH.HOME, { replace: true });
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
