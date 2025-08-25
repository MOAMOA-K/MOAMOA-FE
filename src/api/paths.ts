export const API_PATHS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  SIGNUP: '/api/auth/signup',

  USER: '/api/user',
  USER_DETAIL: '/api/user/my',

  FEEDBACK: `/api/feedbacks`,
  FEEDBACK_MY: `/api/feedbacks/my`,
  FEEDBACK_REPLY: (feedbackId: string) => `/api/feedbacks/${feedbackId}/reply`,

  STORE_MY: `/api/store/my`,
  STORE_RATING: (storeId: string) => `/api/store/${storeId}/ratings`,

  COUPONS: `/api/coupons`,

  USER_COUPON: '/api/user-coupon',
};
