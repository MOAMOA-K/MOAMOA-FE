import { mockStores, type Store } from '@/pages/map/mocks/stores';
import { boundsFilter, delay } from '@/mocks/utils';

export async function listStoresInBounds(
  bounds: { swLat: number; swLng: number; neLat: number; neLng: number },
  limit = 30,
): Promise<Store[]> {
  await delay(120);
  const { swLat, swLng, neLat, neLng } = bounds;
  return mockStores
    .filter((s) => boundsFilter(s.lat, s.lng, swLat, swLng, neLat, neLng))
    .slice(0, limit);
}
