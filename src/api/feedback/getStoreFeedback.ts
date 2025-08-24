import { API_PATHS } from '@/api/paths';
import axiosInstance from '@/api/axiosInstance';

type CustomAxiosResponse<T> = {
  content: T;
  status: string;
  message: string;
};

export type getStoreFeedbackParams = {
  storeId?: string;
  userId?: string;
  type?: 'UNREAD' | 'DONE';
  size?: number;
};

export type getStoreFeedbackResult = Feedback[];

export const getStoreFeedbacks = async (
  params: getStoreFeedbackParams,
): Promise<getStoreFeedbackResult> => {
  const response: CustomAxiosResponse<Feedback[]> = await axiosInstance.get(
    API_PATHS.FEEDBACK,
    {
      params: {
        storeId: params.storeId,
        ...(params.type && { type: params.type }),
      },
    },
  );
  return response.content;
};
