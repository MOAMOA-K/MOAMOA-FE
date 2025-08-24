import { getStoreFeedbacks } from '@/api/feedback/getStoreFeedback';
import { useQuery } from '@tanstack/react-query';

type useFeedbackParams = {
  storeId: string;
  type?: 'UNREAD' | 'DONE';
};

const useFeedback = ({ storeId, type }: useFeedbackParams) => {
  const { data, isLoading } = useQuery<Feedback[]>({
    queryKey: ['feedback', storeId, type],
    queryFn: () => getStoreFeedbacks({ storeId, type }),
  });

  return {
    feedbackData: data,
    isLoading,
  };
};

export default useFeedback;
