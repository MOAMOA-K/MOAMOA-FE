import Typography from '@/components/UI/Typography';
import { HEADER_HEIGHT, NAV_HEIGHT } from '@/constants/number';
import styled from '@emotion/styled';
import { UploadIcon } from 'lucide-react';
import type { ChangeEvent } from 'react';

type UploadSectionProps = {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isUploaded: boolean;
};

const UploadSection = ({ onFileChange, isUploaded }: UploadSectionProps) => {
  return (
    <Container>
      <TextWrapper>
        <Typography variant='title1' weight='bold' as='h2'>
          영수증을 인증해주세요
        </Typography>
        <Typography variant='body1' color='sub'>
          방문객임을 확인하기 위해 필요해요
        </Typography>
      </TextWrapper>
      <Card>
        <IconBox>
          <UploadIcon />
        </IconBox>
        <TextWrapper>
          <Typography variant='subtitle1' weight='medium' as='h3'>
            영수증 사진을 업로드 해주세요
          </Typography>
          <Typography variant='body2' color='sub'>
            jpg, png 파일만 업로드 가능해요
          </Typography>
        </TextWrapper>
        <FileInputLabel htmlFor='file-upload'>파일 선택하기</FileInputLabel>
        <HiddenInput
          id='file-upload'
          type='file'
          accept='image/png, image/jpeg'
          disabled={isUploaded}
          onChange={onFileChange}
        />
      </Card>
    </Container>
  );
};

export default UploadSection;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100dvh - ${NAV_HEIGHT}px - ${HEADER_HEIGHT}px);
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

const Card = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[6]}`};
  border: 1px dashed ${({ theme }) => theme.colors.gray[70]};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  gap: ${({ theme }) => theme.spacing[5]};
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.gray[30]};
`;

const FileInputLabel = styled.label`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.customer.main};
  color: ${({ theme }) => theme.colors.gray[0]};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.customer.dark};
  }
`;

const HiddenInput = styled.input`
  display: none;
`;
