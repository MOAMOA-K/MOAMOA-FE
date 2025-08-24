type User = {
  id: number;
  email: string;
  nickname: string;
  role: 'ROLE_CUSTOMER' | 'ROLE_OWNER' | 'ROLE_ADMIN';
  points: number;
};
