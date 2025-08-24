import axiosInstance from '../axiosInstance';
import { API_PATHS } from '../paths';

export const getStoreRating = async (storeId: string): Promise<number> => {
  const response: number = await axiosInstance.get(
    API_PATHS.STORE_RATING(storeId),
  );

  return response;
};
