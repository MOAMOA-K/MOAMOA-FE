import type { StoreDetailDTO } from '@/pages/store/types';

export const mockStoreDetails: Record<number, StoreDetailDTO> = {
  1: {
    id: 1,
    userId: 5,
    name: '모아모아 분식',
    canonicalName: '모아모아분식',
    address: '서울특별시 강남구 테헤란로 427',
    latitude: 37.5062,
    longitude: 127.0536,
    description: '언제나 맛있는 분식을 제공합니다!',
    category: 'KOREAN',
    imageUrl: 'https://picsum.photos/seed/moa/800/480',
    openingTime: '매일 11:00 - 22:00',
    menuList: [
      {
        id: 101,
        storeId: 1,
        name: '왕돈까스',
        price: 12000,
        description: '수제 돈까스',
        imageUrl: 'https://picsum.photos/seed/menu1/400/300',
      },
      {
        id: 102,
        storeId: 1,
        name: '돈까스',
        price: 10000,
        description: '바삭한 돈까스',
        imageUrl: 'https://picsum.photos/seed/menu2/400/300',
      },
    ],
    announcementList: [
      {
        id: 1,
        storeId: 1,
        feedbackId: 1,
        feedbackContent: '위생이 더 개선되었으면 좋겠어요',
        content: '8월 15일 대청소를 진행했어요.',
      },
      {
        id: 2,
        storeId: 1,
        feedbackId: 2,
        feedbackContent: '돈까스가 너무 퍽퍽해요',
        content: '안심 부위를 사용해 더 부드러워졌어요.',
      },
    ],
  },
};
