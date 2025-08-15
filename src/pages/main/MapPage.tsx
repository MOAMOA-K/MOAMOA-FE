import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

function MapPage() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  // 간단 스크립트 로더 (중복 로딩 방지 X)
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

    if (!KEY) {
      console.error('VITE_KAKAO_MAP_KEY is missing.');
      return;
    }

    loadScript(
      `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${KEY}`,
    )
      .then(() => {
        // kakao 전역 접근 (가볍게 any 1회 캐스팅)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const kakao = (window as any).kakao;

        kakao.maps.load(() => {
          if (!mapRef.current) return;

          const center = new kakao.maps.LatLng(35.8885, 128.6106); // KNU
          const map = new kakao.maps.Map(mapRef.current, { center, level: 3 });

          const marker = new kakao.maps.Marker({ position: center });
          marker.setMap(map);
        });
      })
      .catch(console.error);
  }, []);

  return (
    <Wrap>
      <MapBox ref={mapRef} id='map' />
      map 페이지
    </Wrap>
  );
}

export default MapPage;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh; /* 모바일에서도 화면 가득 */
  max-width: 720px; /* 기존 레이아웃 폭 유지 시 사용 */
  margin: 0 auto;
`;

const MapBox = styled.div`
  position: absolute;
  inset: 0; /* 상하좌우 꽉 채우기 */
`;
