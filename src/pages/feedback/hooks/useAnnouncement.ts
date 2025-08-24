import { postAnnouncement } from '@/api/announcement/postAnnouncement';
import { useMutation } from '@tanstack/react-query';
type useAnnouncementParams = {
  feedbackId: string;
  storeId: string;
  description: string;
};

const useAnnouncement = ({
  feedbackId,
  storeId,
  description,
}: useAnnouncementParams) => {
  const { mutate } = useMutation({
    mutationFn: () => postAnnouncement({ storeId, feedbackId, description }),
  });

  return { postAnnouncement: mutate };
};

export default useAnnouncement;
