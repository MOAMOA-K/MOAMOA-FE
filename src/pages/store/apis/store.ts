import { mockStores } from '@/pages/map/mocks/stores';
import { mockStoreDetails } from '@/pages/store/mocks/details';
import type { StoreDetailDTO } from '@/pages/store/types';
import { delay } from '@/mocks/utils';

const USE_MOCK = import.meta.env?.VITE_USE_MOCK === 'true';

export async function getStoreDetail(id: number): Promise<StoreDetailDTO> {
  if (USE_MOCK) {
    await delay(200);
    // 상세 목이 있으면 사용
    if (mockStoreDetails[id]) return mockStoreDetails[id];

    // 없으면 기본 store에서 채워서 생성
    const base = mockStores.find((s) => s.id === id);
    if (!base) throw new Error('Not Found');
    return {
      id: base.id,
      userId: 0,
      name: base.name,
      canonicalName: base.name.replace(/\s+/g, ''),
      address: base.address ?? '',
      latitude: base.lat,
      longitude: base.lng,
      description: '',
      imageUrl: base.image,
      openingTime:
        base.openTime && base.closeTime
          ? `${base.openTime} - ${base.closeTime}`
          : '',
      menuList: [],
      announcementList: [],
    };
  }

  // 서버 전환 시
  const res = await fetch(`/api/store/${id}`);
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
}
