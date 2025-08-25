import Header from '@/components/layout/Header';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import LetterItem from '../../components/LetterItem';
import useFeedbackMy from '../../hooks/useFeedbackMy';
import Typography from '@/components/UI/Typography';

const MyLetterPage = () => {
  const { myFeedbackData, isLoading } = useFeedbackMy();

  if (isLoading || !myFeedbackData) {
    return (
      <>
        <Header title='나의 피드백' />
        <Main></Main>
      </>
    );
  }

  if (myFeedbackData.length === 0) {
    return (
      <>
        <Header title='나의 피드백' />
        <ErrorMain>
          <Typography variant='body1'>작성한 피드백이 없습니다. </Typography>
        </ErrorMain>
      </>
    );
  }

  return (
    <>
      <Header title='나의 피드백' />
      <Main>
        <MyLetterSection>
          {myFeedbackData.map((item) => (
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

const ErrorMain = styled.div`
  height: 100%;
  min-height: calc(100dvh - ${HEADER_HEIGHT}px - ${NAV_HEIGHT}px);
  background-color: ${({ theme }) => theme.colors.customer.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;
