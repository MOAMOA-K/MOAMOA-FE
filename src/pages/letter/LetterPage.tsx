import Header from '@/components/layout/Header';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import UploadSection from './components/UploadSection';
import useFile from './hooks/useFile';
import LetterSendSection from './components/LetterSendSection';

const LetterPage = () => {
  const { isUploaded, handleFileChange } = useFile();

  return (
    <>
      <Header title='마음의 편지' />
      <Main>
        {!isUploaded ? (
          <UploadSection
            isUploaded={isUploaded}
            onFileChange={handleFileChange}
          />
        ) : (
          <LetterSendSection />
        )}
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
