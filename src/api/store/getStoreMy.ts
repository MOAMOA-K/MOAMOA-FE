import axiosInstance from '../axiosInstance';
import { API_PATHS } from '../paths';

export const getStoreMy = async (): Promise<MyStore> => {
  const response: MyStore = await axiosInstance.get(API_PATHS.STORE_MY);

  return response;
};
