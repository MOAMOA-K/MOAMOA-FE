type Feedback = {
  id: number;
  rating: number;
  modifiedContent: string;
  improvements?: string;
  reply: string | null;
  type: 'COMPLAINT' | 'SUGGESTION' | 'COMPLIMENT';
  status: 'UNREAD' | 'DONE';
  createdAt: string;
};

type MyFeedback = {
  id: number;
  storeName: string;
  rating: number;
  content: string;
  reply: string | null;
  createdAt: string;
};
