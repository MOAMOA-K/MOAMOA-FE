import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { ROUTE_PATH } from '@/routes/paths';
import type { Store } from '@/pages/map/mocks/stores';
import { mockStores } from '@/pages/map/mocks/stores';
import BottomSheet from '@/pages/map/components/BottomSheet';
import SearchTrigger from '@/pages/map/components/SearchTrigger';
import NavigationCustomer from '@/components/layout/NavigationCustomer';

function MapPage() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<Store | null>(null);
  const navigate = useNavigate();
  const sheetOpen = !!selected;

  const loadScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error(`load failed: ${src}`));
      document.head.appendChild(s);
    });

  useEffect(() => {
    const KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    if (!KEY) return;

    const markers: kakao.maps.Marker[] = [];

    loadScript(
      `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${KEY}`,
    )
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const kakao = (window as any).kakao;

        kakao.maps.load(() => {
          if (!mapRef.current) return;

          const center = new kakao.maps.LatLng(35.8889, 128.6109); // 경북대 본관
          const map = new kakao.maps.Map(mapRef.current, { center, level: 4 });

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                const cur = new kakao.maps.LatLng(
                  pos.coords.latitude,
                  pos.coords.longitude,
                );
                map.setCenter(cur);
                const me = new kakao.maps.Marker({ map, position: cur });
                markers.push(me);
              },
              () => {},
            );
          }

          const storeMarkers = mockStores.map((s) => {
            const m = new kakao.maps.Marker({
              map,
              position: new kakao.maps.LatLng(s.lat, s.lng),
            });
            kakao.maps.event.addListener(m, 'click', () => {
              console.log('[marker click]', s.name);
              setSelected(s);
            });
            return m;
          });
          markers.push(...storeMarkers);
        });
      })
      .catch(console.error);

    return () => {
      try {
        markers.forEach((m) => m.setMap(null));
      } catch {
        // intentionally ignored
      }
      setSelected(null);
    };
  }, []);

  return (
    <Wrap>
      <MapBox ref={mapRef} />
      <TopBar>
        <SearchTrigger onClick={() => navigate(ROUTE_PATH.SEARCH)} />
      </TopBar>

      <SheetWrap open={sheetOpen}>
        <BottomSheet
          open={sheetOpen}
          title={selected?.name}
          subtitle={selected?.category}
          //imageUrl={selected?.imageUrl}
          onClose={() => setSelected(null)}
        />
      </SheetWrap>

      <NavHolder hidden={sheetOpen}>
        <NavigationCustomer />
      </NavHolder>
    </Wrap>
  );
}

export default MapPage;

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

  /* 화면 좌우 여백 12px 유지하면서 720px 이하로 */
  width: min(720px, calc(100% - 24px));

  /* 지도 클릭 살리기: 컨테이너는 무시, 자식만 클릭 */
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
  pointer-events: auto;

  transform: translateY(${({ hidden }) => (hidden ? '110%' : '0%')});
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  transition:
    transform 0.28s ease,
    opacity 0.2s ease;
`;
