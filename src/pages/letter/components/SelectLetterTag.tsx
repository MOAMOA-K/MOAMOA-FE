import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { LetterTag } from '../constants/letter';
import type { LetterTagType } from '../constants/letter';

type SelectLetterTagProps = {
  letterTag: LetterTagType;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      satisfaction: number;
      letterTag: LetterTagType;
      letterText: string;
    }>
  >;
};

const SelectLetterTag = ({ letterTag, setFormData }: SelectLetterTagProps) => {
  return (
    <Container>
      <Typography variant='title2' weight='medium' as='h3'>
        편지 유형
      </Typography>
      <LetterTagWrapper>
        {LetterTag.map(({ value, label }) => (
          <TagButton
            key={value}
            type='button'
            active={letterTag === value}
            color={value}
            onClick={() =>
              setFormData((prev) => ({ ...prev, letterTag: value }))
            }
          >
            {label}
          </TagButton>
        ))}
      </LetterTagWrapper>
    </Container>
  );
};

export default SelectLetterTag;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const TagButton = styled.button<{ active: boolean; color: LetterTagType }>`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray[70]};
  background-color: ${({ active, theme, color }) =>
    active ? theme.colors.tag[color] : 'white'};
  cursor: pointer;
`;

const LetterTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[14]};
`;
