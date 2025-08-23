import { API_PATHS } from '@/api/paths';
import axiosInstance from '@/api/axiosInstance';

export type PostLoginParams = {
  email: string;
  password: string;
};

export type PostLoginResult = {
  accessToken: string;
};

export const postLogin = async (
  params: PostLoginParams,
): Promise<PostLoginResult> => {
  return await axiosInstance.post(API_PATHS.LOGIN, params);
};
