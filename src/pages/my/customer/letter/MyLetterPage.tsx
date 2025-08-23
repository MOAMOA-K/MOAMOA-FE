import Header from '@/components/layout/Header';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import { letterItems } from '../../constants/history-item';
import LetterItem from '../../components/LetterItem';

const MyLetterPage = () => {
  return (
    <>
      <Header title='나의 피드백' />
      <Main>
        <MyLetterSection>
          {letterItems.map((item) => (
            <LetterItem key={item.id} {...item} />
          ))}
        </MyLetterSection>
      </Main>
    </>
  );
};

export default MyLetterPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.customer.background};
  display: flex;
  justify-content: center;
`;

const MyLetterSection = styled.section`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[6]};
`;
