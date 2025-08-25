import LandingImage from '@/assets/landing/landingImage1.png';
import LandingImage2 from '@/assets/landing/landingImage2.png';
import LandingImage3 from '@/assets/landing/landingImage3.png';

export const landingData = [
  {
    imageUrl: LandingImage,
    title: '익명 피드백으로 솔직한 소통',
    description:
      '영수증 인증 후 사장님에게만 전달되는 익명의 마음의 편지를 보내보세요',
  },
  {
    imageUrl: LandingImage2,
    title: '피드백 할 때마다 포인트 적립',
    description:
      '마음의 편지를 보낼 때마다 포인트가 쌓이고 할인 쿠폰으로 교환할 수 있어요',
  },
  {
    imageUrl: LandingImage3,
    title: '소통하는 가게와 함께 성장',
    description:
      '피드백을 반영하는 가게들을 발견하고 더 나은 대학가를 만들어가요',
  },
] as const;
