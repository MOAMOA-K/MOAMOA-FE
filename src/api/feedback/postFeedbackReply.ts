import { API_PATHS } from '@/api/paths';
import axiosInstance from '@/api/axiosInstance';

export type PostFeedbackReplyParams = {
  feedbackId: string;
  replyContent: string;
};

export const postFeedbackReply = async (
  params: PostFeedbackReplyParams,
): Promise<void> => {
  return await axiosInstance.post(
    API_PATHS.FEEDBACK_REPLY(params.feedbackId),
    params,
  );
};
