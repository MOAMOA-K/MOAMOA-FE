import axiosInstance from '@/api/axiosInstance';
import { API_PATHS } from '@/api/paths';

export type FeedbackType = 'COMPLIMENT' | 'SUGGESTION' | 'COMPLAINT';

export type CreateFeedbackRequest = {
  storeId: number;
  rating: number;
  content: string;
  type: FeedbackType;
  receiptId: number;
};

export type CreateFeedbackResponse = { message: string };

export async function createFeedback(
  body: CreateFeedbackRequest,
): Promise<CreateFeedbackResponse> {
  // axiosInstance가 응답을 data로 언랩해주므로 여기서는 그대로 반환
  return await axiosInstance.post(API_PATHS.FEEDBACK ?? '/api/feedbacks', body);
}
