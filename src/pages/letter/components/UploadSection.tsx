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
        <Title>영수증을 인증해주세요</Title>
        <Content>방문객임을 확인하기 위해 필요해요</Content>
      </TextWrapper>
      <Card>
        <IconBox>
          <UploadIcon />
        </IconBox>
        <TextWrapper>
          <SubTitle>영수증 사진을 업로드 해주세요</SubTitle>
          <SubContent>jpg, png 파일만 업로드 가능해요</SubContent>
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

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.title1.fontSize};
  line-height: ${({ theme }) => theme.typography.title1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.default};
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray[70]};
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

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.default};
`;

const SubContent = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray[70]};
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
