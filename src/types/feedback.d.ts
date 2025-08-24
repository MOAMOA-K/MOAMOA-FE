type Feedback = {
  id: number;
  rating: number;
  modifiedContent: string;
  reply: string | null;
  type: 'COMPLAINT' | 'SUGGESTION' | 'COMPLIMENT';
  status: 'UNREAD' | 'DONE';
  createdAt: string;
};
