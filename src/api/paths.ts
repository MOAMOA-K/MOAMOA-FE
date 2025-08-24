export const API_PATHS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  SIGNUP: '/api/auth/signup',

  USER: '/api/user',
  USER_DETAIL: '/api/user/my',

  FEEDBACK: `/api/feedbacks`,
  FEEDBACK_MY: `/api/feedbacks/my`,
  FEEDBACK_REPLY: (feedbackId: string) => `/api/feedbacks/${feedbackId}/reply`,
};
