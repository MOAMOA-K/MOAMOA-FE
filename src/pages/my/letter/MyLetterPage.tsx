import Header from '@/components/layout/Header';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import LetterItem from '../components/LetterItem';
import { letterItems } from '../constants/history-item';

const MyLetterPage = () => {
  return (
    <>
      <Header title='나의 피드백' />
      <Main>
        {letterItems.map((item) => (
          <LetterItem key={item.id} {...item} />
        ))}
      </Main>
    </>
  );
};

export default MyLetterPage;

const Main = styled.main`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: #fcfcfc;
`;
