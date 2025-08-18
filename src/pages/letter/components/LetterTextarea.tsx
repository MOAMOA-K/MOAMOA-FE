import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import type { LetterTagType } from '../constants/letter';

type LetterTextareaProps = {
  letterText: string;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      satisfaction: number;
      letterTag: LetterTagType;
      letterText: string;
    }>
  >;
};

const LetterTextarea = ({ letterText, setFormData }: LetterTextareaProps) => {
  return (
    <Container>
      <Typography variant='title2' weight='medium' as='h3'>
        마음의 편지
      </Typography>
      <LetterText
        value={letterText}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, letterText: e.target.value }))
        }
      />
    </Container>
  );
};

export default LetterTextarea;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const LetterText = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray[70]};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing[2]};
  resize: none;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  color: ${({ theme }) => theme.colors.text.default};
`;
