type User = {
  id: number;
  email: string;
  nickname: string;
  role: 'ROLE_CUSTOMER' | 'ROLE_OWNER' | 'ROLE_ADMIN';
  points: number;
};

type UserDetail = {
  id: number;
  email: string;
  nickname: string;
  points: number;
  feedbackCount: number;
  couponCount: number;
};
