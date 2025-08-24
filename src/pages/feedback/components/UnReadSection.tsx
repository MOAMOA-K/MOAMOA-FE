import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { Bot } from 'lucide-react';
import { useState } from 'react';
import useAnnouncement from '../hooks/useAnnouncement';

type UnReadSectionProps = {
  storeId: string;
  feedbackId: string;
};

const UnReadSection = ({ storeId, feedbackId }: UnReadSectionProps) => {
  const [processing, setProcessing] = useState(false);
  const [reply, setReply] = useState('');
  const { postAnnouncement } = useAnnouncement({
    feedbackId,
    storeId,
    description: reply,
  });
  const handleClickAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setProcessing(true);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postAnnouncement(undefined, {
      onSuccess: () => {
        setReply('');
        setProcessing(false);
      },
    });
  };

  return (
    <>
      <Card>
        <Wrapper>
          <Bot />
          <Typography variant='body1' weight='medium'>
            AI 추천 개선 방안
          </Typography>
        </Wrapper>
        <Typography variant='body1'>~~~ 이렇게 개선해보세요</Typography>
      </Card>
      <form onSubmit={handleSubmit}>
        {processing && (
          <Textarea
            placeholder='답변을 입력해주세요.'
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
        )}
        <Wrapper>
          {processing ? (
            <LinkButton type='submit'>
              <Typography variant='body2' weight='medium' color='white'>
                답변 등록하기
              </Typography>
            </LinkButton>
          ) : (
            <LinkButton type='button' onClick={handleClickAnswer}>
              <Typography variant='body2' weight='medium' color='white'>
                답변 작성하기
              </Typography>
            </LinkButton>
          )}
        </Wrapper>
      </form>
    </>
  );
};

export default UnReadSection;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.feedback.UNREAD};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};
  width: 100%;
  max-width: 550px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.gray[70]};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing[2]};
  resize: none;
  overflow: auto;
  outline: none;

  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.owner.main};
`;
