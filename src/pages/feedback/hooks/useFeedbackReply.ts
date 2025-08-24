import { postFeedbackReply } from '@/api/feedback/postFeedbackReply';
import { useMutation } from '@tanstack/react-query';
type useFeedbackReplyParams = {
  feedbackId: string;
  description: string;
};

const useFeedbackReply = ({
  feedbackId,
  description,
}: useFeedbackReplyParams) => {
  const { mutate } = useMutation({
    mutationFn: () =>
      postFeedbackReply({ feedbackId, replyContent: description }),
  });

  return { postReply: mutate };
};

export default useFeedbackReply;
