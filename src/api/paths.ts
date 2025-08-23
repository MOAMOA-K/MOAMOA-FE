export const API_PATHS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  SIGNUP: '/api/auth/signup',
  FEEDBACK: `/api/feedbacks`,
  ANNOUNCEMENT: `/api/announcement`,

  STORE_LIST: '/api/store/list',
  STORE_DETAIL: (id: string | number) => `/api/store/${id}`,
};
