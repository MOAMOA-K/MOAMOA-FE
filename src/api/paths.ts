export const API_PATHS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  SIGNUP: '/api/auth/signup',

  USER: '/api/user',

  FEEDBACK: `/api/feedbacks`,
  FEEDBACK_REPLY: (feedbackId: string) => `/api/feedbacks/${feedbackId}/reply`,
};
