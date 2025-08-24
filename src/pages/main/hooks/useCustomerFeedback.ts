import { getFeedbackMy } from '@/api/feedback/getFeedbackMy';
import { useQuery } from '@tanstack/react-query';

const useCustomerFeedback = () => {
  const { data, isLoading } = useQuery<MyFeedback[]>({
    queryKey: ['feedback-my'],
    queryFn: () => getFeedbackMy(),
  });

  return {
    feedbackData: data,
    isLoading,
  };
};

export default useCustomerFeedback;
