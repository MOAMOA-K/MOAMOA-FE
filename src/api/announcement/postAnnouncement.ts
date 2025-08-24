import { API_PATHS } from '@/api/paths';
import axiosInstance from '@/api/axiosInstance';

export type PostAnnouncementParams = {
  storeId: string;
  feedbackId: string;
  description: string;
};

export const postAnnouncement = async (
  params: PostAnnouncementParams,
): Promise<void> => {
  return await axiosInstance.post(API_PATHS.ANNOUNCEMENT, params);
};
