import { API_PATHS } from '@/api/paths';
import axiosInstance from '@/api/axiosInstance';

export type PostSignupParams = {
  nickname: string;
  email: string;
  password: string;
  role: 'ROLE_CUSTOMER' | 'ROLE_OWNER' | 'ROLE_ADMIN';
};

export const postSignup = async (params: PostSignupParams): Promise<void> => {
  return await axiosInstance.post(API_PATHS.SIGNUP, params);
};
