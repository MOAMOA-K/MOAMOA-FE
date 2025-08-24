import { SESSION_AUTH_KEY } from '@/constants/storageKeys';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem(SESSION_AUTH_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data?.data ?? response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
