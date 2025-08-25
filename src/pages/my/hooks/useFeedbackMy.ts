import { getFeedbackMy } from '@/api/feedback/getFeedbackMy';
import { useQuery } from '@tanstack/react-query';

const useFeedbackMy = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['myFeedback'],
    queryFn: getFeedbackMy,
  });

  return {
    myFeedbackData: data,
    isLoading,
    isError,
  };
};

export default useFeedbackMy;
