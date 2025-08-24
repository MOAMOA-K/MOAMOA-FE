import { getFeedbackMy } from '@/api/feedback/getFeedbackMy';
import { useQuery } from '@tanstack/react-query';

const useCustomerFeedback = () => {
  const { data, isLoading, isError } = useQuery<MyFeedback[]>({
    queryKey: ['feedback-my'],
    queryFn: () => getFeedbackMy(),
  });

  return {
    feedbackData: data,
    isLoading,
    isError,
  };
};

export default useCustomerFeedback;
