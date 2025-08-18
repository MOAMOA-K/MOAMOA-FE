import Typography from '@/components/UI/Typography';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import { Star } from 'lucide-react';
import { LetterTag } from '../constants/letter';
import type { LetterTagType } from '../constants/letter';

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
        <Typography
          variant='body1'
          weight='regular'
          color='theme.colors.gray[70]'
        >
          사장님만 볼 수 있는 익명의 편지에요
        </Typography>
      </TextWrapper>
      <SectionWrapper>
        <Typography variant='title2' weight='medium' as='h3'>
          전체적인 만족도
        </Typography>
        <StarWrapper>
          {[1, 2, 3, 4, 5].map((num) => (
            <Star
              key={num}
              size={32}
              fill={num <= satisfaction ? 'gold' : 'none'}
              stroke='black'
              onClick={() =>
                setFormData((prev) => ({ ...prev, satisfaction: num }))
              }
              style={{ cursor: 'pointer' }}
            />
          ))}
        </StarWrapper>
      </SectionWrapper>
      <SectionWrapper>
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
      </SectionWrapper>
      <SectionWrapper>
        <Typography variant='title2' weight='medium' as='h3'>
          마음의 편지
        </Typography>
        <LetterText
          value={letterText}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, letterText: e.target.value }))
          }
        />
      </SectionWrapper>
      <Button type='submit'>보내기</Button>
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

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[10]};
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

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]} 0;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.customer.main};

  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[0]};
  cursor: pointer;
`;
