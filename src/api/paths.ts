export const API_PATHS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  SIGNUP: '/api/auth/signup',

  STORE_LIST: '/api/store/list',
  STORE_DETAIL: (id: string | number) => `/api/store/${id}`,
  FEEDBACK: '/api/feedback/list',
};
