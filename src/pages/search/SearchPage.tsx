import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { mockStores } from '@/pages/map/mocks/stores';
import { haversine } from '@/pages/search/utils/geo';
import { useNavigate } from 'react-router';
import SearchHeader from './components/SearchHeader';
import SearchEmpty from './components/SearchEmpty';
import SearchResults, { type SearchResult } from './components/SearchResults';

const NAV_HEIGHT = 70;

export default function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  // 현재 위치 가져오기 (실패 시 경북대 본관)
  useEffect(() => {
    const fallback = { lat: 35.8889, lng: 128.6109 };
    if (!navigator.geolocation) {
      setOrigin(fallback);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setOrigin({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setOrigin(fallback),
      { enableHighAccuracy: true, maximumAge: 10_000 },
    );
  }, []);

  // 필터 + 거리계산 + 정렬 (페이지에만 로직 남김)
  const results: SearchResult[] = useMemo(() => {
    const base = query.trim().toLowerCase();
    if (!base) return [];
    return mockStores
      .filter(
        (s) =>
          s.name.toLowerCase().includes(base) ||
          s.category?.toLowerCase().includes(base),
      )
      .map((s) => ({
        store: s,
        distanceM: origin
          ? haversine(origin.lat, origin.lng, s.lat, s.lng)
          : null,
      }))
      .sort((a, b) => (a.distanceM ?? Infinity) - (b.distanceM ?? Infinity));
  }, [query, origin]);

  return (
    <Page>
      <SearchHeader
        query={query}
        onChange={setQuery}
        onBack={() => navigate(-1)}
      />

      {query.length === 0 ? (
        <SearchEmpty message='검색어를 입력해보세요.' navHeight={NAV_HEIGHT} />
      ) : results.length === 0 ? (
        <SearchEmpty
          message='일치하는 매장을 찾지 못했어요.'
          navHeight={NAV_HEIGHT}
        />
      ) : (
        <SearchResults
          results={results}
          onSelect={(s) => console.log('select:', s)}
        />
      )}
    </Page>
  );
}

/* styles (페이지 컨테이너만 보유) */
const Page = styled.div`
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  min-height: 100dvh;
  padding-bottom: calc(${NAV_HEIGHT}px + env(safe-area-inset-bottom, 0px));
  background: #fff;
`;
