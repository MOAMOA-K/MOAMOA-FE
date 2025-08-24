import axiosInstance from '../axiosInstance';
import { API_PATHS } from '../paths';

const getUserDetail = async () => {
  const response: UserDetail = await axiosInstance.get(API_PATHS.USER_DETAIL);
  return response;
};

export default getUserDetail;
