import { getStoreFeedbacks } from '@/api/feedback/getStoreFeedback';
import { useQuery } from '@tanstack/react-query';

type useStoreFeedbackParams = {
  storeId: string;
  type?: 'UNREAD' | 'DONE';
};

const useStoreFeedback = ({ storeId, type }: useStoreFeedbackParams) => {
  const { data, isLoading } = useQuery<Feedback[]>({
    queryKey: ['feedback', storeId, type],
    queryFn: () => getStoreFeedbacks({ storeId, type }),
  });

  return {
    feedbackData: data,
    isLoading,
  };
};

export default useStoreFeedback;
