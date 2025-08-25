import axiosInstance from '../axiosInstance';
import { API_PATHS } from '../paths';

export const getUser = async (): Promise<User> => {
  const response: User = await axiosInstance.get(API_PATHS.USER);

  return response;
};
