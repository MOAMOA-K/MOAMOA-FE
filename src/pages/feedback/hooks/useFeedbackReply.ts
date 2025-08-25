import { postFeedbackReply } from '@/api/feedback/postFeedbackReply';
import { useMutation, useQueryClient } from '@tanstack/react-query';
type useFeedbackReplyParams = {
  storeId: string;
  feedbackId: string;
  description: string;
};

const useFeedbackReply = ({
  storeId,
  feedbackId,
  description,
}: useFeedbackReplyParams) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () =>
      postFeedbackReply({ feedbackId, replyContent: description }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedback', storeId] });
    },
  });

  return { postReply: mutate };
};

export default useFeedbackReply;
