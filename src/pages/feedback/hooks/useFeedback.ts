import { getStoreFeedbacks } from '@/api/feedback/getStoreFeedback';
import { useQuery } from '@tanstack/react-query';

type useFeedbackParams = {
  storeId: string;
  type?: 'UNREAD' | 'DONE';
  enabled?: boolean;
};

const useFeedback = ({ storeId, type, enabled }: useFeedbackParams) => {
  const { data, isLoading } = useQuery<Feedback[]>({
    queryKey: ['feedback', storeId, type],
    queryFn: () => getStoreFeedbacks({ storeId, type }),
    enabled,
  });

  return {
    feedbackData: data,
    isLoading,
  };
};

export default useFeedback;
