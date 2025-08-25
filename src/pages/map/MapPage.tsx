import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/paths';
import BottomSheet from '@/pages/map/components/BottomSheet';
import SearchTrigger from '@/pages/map/components/SearchTrigger';
import NavigationCustomer from '@/components/layout/NavigationCustomer';
import { fetchStoreList, type StoreListItem } from '@/api/store/store';

type MarkerLike = { setMap: (m: unknown | null) => void };

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<MarkerLike[]>([]);
  const [selected, setSelected] = useState<StoreListItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    if (!KEY) {
      setErr('Kakao API Key가 설정되지 않았습니다.');
      setLoading(false);
      return;
    }

    let destroyed = false;

    const KNU_LAT = 35.8889; // 경북대 위도
    const KNU_LNG = 128.6109; // 경북대 경도

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`load failed: ${src}`));
        document.head.appendChild(s);
      });

    const init = async () => {
      try {
        setLoading(true);
        await loadScript(
          `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${KEY}`,
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const kakao = (window as any)?.kakao;
        if (!kakao?.maps) {
          setErr('카카오맵 SDK를 불러오지 못했습니다.');
          setLoading(false);
          return;
        }

        kakao.maps.load(async () => {
          if (destroyed || !mapRef.current) return;

          // 지도 기본 중심도 경북대
          const defaultCenter = new kakao.maps.LatLng(KNU_LAT, KNU_LNG);
          const map = new kakao.maps.Map(mapRef.current, {
            center: defaultCenter,
            level: 4,
          });

          // 1. 서버에서 경북대 좌표로 가게 리스트 요청
          let stores: StoreListItem[] = [];
          try {
            stores = await fetchStoreList({
              latitude: KNU_LAT,
              longitude: KNU_LNG,
            });

            if (import.meta.env.DEV) {
              console.group('[MapPage] /store/list result @KNU');
              console.log('count:', stores.length);
              console.log('first:', stores[0]);
              console.groupEnd();
            }
          } catch (apiErr) {
            if (import.meta.env.DEV)
              console.error('[MapPage] fetchStoreList error:', apiErr);
            setErr('가게 목록을 불러오지 못했습니다. (권한/네트워크 확인)');
            setLoading(false);
            return;
          }

          // 2. 마커 + bounds
          const bounds = new kakao.maps.LatLngBounds();
          stores.forEach((s) => {
            if (!Number.isFinite(s.latitude) || !Number.isFinite(s.longitude))
              return;
            const pos = new kakao.maps.LatLng(s.latitude, s.longitude);
            const marker = new kakao.maps.Marker({ map, position: pos });
            kakao.maps.event.addListener(marker, 'click', () => setSelected(s));
            markersRef.current.push(marker);
            bounds.extend(pos);
          });

          if (stores.length > 0) {
            map.setBounds(bounds); // 전체 마커가 보이도록
          } else {
            map.setCenter(defaultCenter); // 없으면 기본(경북대) 유지
          }

          // 3. (선택) 현재 위치 마커만 표시 (화면 이동 X)
          if (navigator.geolocation) {
            try {
              const pos = await new Promise<GeolocationPosition>((res, rej) =>
                navigator.geolocation.getCurrentPosition(res, rej, {
                  enableHighAccuracy: true,
                  maximumAge: 10_000,
                }),
              );
              const cur = new kakao.maps.LatLng(
                pos.coords.latitude,
                pos.coords.longitude,
              );
              const me = new kakao.maps.Marker({ map, position: cur });
              markersRef.current.push(me);
              // map.setCenter(cur); // 필요하면 주석 해제
            } catch (geoErr) {
              if (import.meta.env.DEV)
                console.debug('[MapPage] geolocation error:', geoErr);
            }
          }

          setLoading(false);
        });
      } catch (e) {
        if (import.meta.env.DEV) console.error('[MapPage] init error:', e);
        setErr('지도를 초기화하지 못했습니다.');
        setLoading(false);
      }
    };

    init();
    return () => {
      destroyed = true;
      try {
        markersRef.current.forEach((m) => m.setMap?.(null));
      } finally {
        markersRef.current = [];
        setSelected(null);
      }
    };
  }, []);

  return (
    <Wrap>
      <MapBox ref={mapRef} />
      <TopBar>
        <SearchTrigger onClick={() => navigate(ROUTE_PATH.SEARCH)} />
      </TopBar>

      {loading && <Toast>지도를 불러오는 중…</Toast>}
      {err && <Toast>{err}</Toast>}

      <SheetWrap open={!!selected}>
        <BottomSheet
          open={!!selected}
          title={selected?.name}
          subtitle={selected?.category}
          imageUrl={`/store/${selected?.id}`}
          onClose={() => setSelected(null)}
          onClickDetail={() => {
            if (!selected) return;
            const path = generatePath(ROUTE_PATH.STORE_DETAIL, {
              id: String(selected.id),
            });
            navigate(path);
          }}
        />
      </SheetWrap>

      <NavHolder hidden={!!selected}>
        <NavigationCustomer />
      </NavHolder>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  max-width: 720px;
  margin: 0 auto;
`;
const MapBox = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`;
const TopBar = styled.div`
  position: absolute;
  z-index: 4;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: min(720px, calc(100% - 24px));
  pointer-events: none;
  & > * {
    pointer-events: auto;
  }
`;
const SheetWrap = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: 8;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
`;
const NavHolder = styled.div<{ hidden: boolean }>`
  position: absolute;
  z-index: 6;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  transform: translateY(${({ hidden }) => (hidden ? '110%' : '0%')});
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  transition:
    transform 0.28s ease,
    opacity 0.2s ease;
`;
const Toast = styled.div`
  position: absolute;
  z-index: 7;
  left: 50%;
  top: 64px;
  transform: translateX(-50%);
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(17, 17, 17, 0.8);
  color: #fff;
  font-size: 12px;
`;
