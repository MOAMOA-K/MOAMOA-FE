import axiosInstance from '@/api/axiosInstance';
import { API_PATHS } from '@/api/paths';

export type OcrStatus = 'AVAILABLE' | 'PENDING' | 'REJECTED'; // 백엔드 값에 맞춰 필요시 보강
export type OcrReceiptResponse = {
  id: number;
  storeName: string;
  address: string;
  dateTime: string; // "yyyy-MM-dd HH:mm:ss"
  totalPrice: number;
  status: OcrStatus;
};

export async function uploadReceiptOcr(
  file: File,
): Promise<OcrReceiptResponse> {
  const form = new FormData();
  form.append('image', file);

  // axiosInstance가 기본으로 'application/json'을 넣고 있으므로 여기서 덮어쓰기
  return await axiosInstance.post<OcrReceiptResponse, OcrReceiptResponse>(
    API_PATHS.RECEIPT,
    form,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );
}
