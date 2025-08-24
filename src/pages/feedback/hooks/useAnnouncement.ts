import { postFeedbackReply } from '@/api/feedback/postFeedbackReply';
import { useMutation } from '@tanstack/react-query';
type useAnnouncementParams = {
  feedbackId: string;
  description: string;
};

const useAnnouncement = ({
  feedbackId,
  description,
}: useAnnouncementParams) => {
  const { mutate } = useMutation({
    mutationFn: () =>
      postFeedbackReply({ feedbackId, replyContent: description }),
  });

  return { postReply: mutate };
};

export default useAnnouncement;
