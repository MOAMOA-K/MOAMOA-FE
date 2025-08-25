export const API_PATHS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  SIGNUP: '/api/auth/signup',
  RECEIPT: '/api/receipt/ocr',
  ANNOUNCEMENT: `/api/announcement`,
  STORE_LIST: '/api/store/list',
  STORE_DETAIL: (id: number) => `/api/store/${id}`,
  USER: '/api/user',
  USER_DETAIL: '/api/user/my',

  FEEDBACK: `/api/feedbacks`,
  FEEDBACK_MY: `/api/feedbacks/my`,
  FEEDBACK_REPLY: (feedbackId: string) => `/api/feedbacks/${feedbackId}/reply`,

  STORE_MY: `/api/store/my`,
  STORE_RATING: (storeId: string) => `/api/store/${storeId}/ratings`,

  COUPONS: `/api/coupons`,

  COUPONS_DETAIL: (id: number) => `/api/coupons/store/${id}`,
  USER_COUPON: '/api/user-coupon',
  USER_COUPON_USE: '/api/user-coupon/use',
};
