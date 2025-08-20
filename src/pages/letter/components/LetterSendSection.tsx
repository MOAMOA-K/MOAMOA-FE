import Typography from '@/components/UI/Typography';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import type { LetterTagType } from '@/constants/letter';
import SelectStar from './SelectStar';
import SelectLetterTag from './SelectLetterTag';
import LetterTextarea from './LetterTextarea';

type LetterSendSectionProps = {
  satisfaction: number;
  letterTag: LetterTagType;
  letterText: string;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      satisfaction: number;
      letterTag: LetterTagType;
      letterText: string;
    }>
  >;
};

const LetterSendSection = ({
  satisfaction,
  letterTag,
  letterText,
  setFormData,
}: LetterSendSectionProps) => {
  return (
    <Container>
      <TextWrapper>
        <Typography variant='title1' weight='bold' as='h2'>
          솔직한 마음을 전해주세요
        </Typography>
        <Typography variant='body1' weight='regular' color='sub'>
          사장님만 볼 수 있는 익명의 편지에요
        </Typography>
      </TextWrapper>
      <SelectStar satisfaction={satisfaction} setFormData={setFormData} />
      <SelectLetterTag letterTag={letterTag} setFormData={setFormData} />
      <LetterTextarea letterText={letterText} setFormData={setFormData} />
      <Button type='submit'>
        <Typography variant='subtitle1' weight='medium' color='white'>
          보내기
        </Typography>
      </Button>
    </Container>
  );
};

export default LetterSendSection;

const Container = styled.div`
  height: 100%;
  min-height: calc(100dvh - ${NAV_HEIGHT}px - ${HEADER_HEIGHT}px);
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[6]};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]} 0;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.customer.main};
  cursor: pointer;
`;
