import axiosInstance from '../axiosInstance';
import { API_PATHS } from '../paths';

export const getFeedbackMy = async (): Promise<MyFeedback[]> => {
  const response: MyFeedback[] = await axiosInstance.get(API_PATHS.FEEDBACK_MY);

  return response;
};
