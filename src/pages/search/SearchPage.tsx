import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams, generatePath } from 'react-router';
import SearchHeader from './components/SearchHeader';
import SearchResults from './components/SearchResults';
import SearchEmpty from './components/SearchEmpty';
import { searchStores, type SearchItem } from '@/pages/search/apis/search';
import { ROUTE_PATH } from '@/routes/paths';

const NAV_HEIGHT = 70;

export default function SearchPage() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  const initial = params.get('keyword') ?? '';
  const [keyword, setKeyword] = useState(initial);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 초기 URL에 keyword가 있으면 자동 검색
  useEffect(() => {
    if (!initial) return;
    void submit(initial, { updateUrl: false });
  }, []);

  const requestIdRef = useRef(0);
  // 제출 핸들러
  const submit = async (kw = keyword, opts?: { updateUrl?: boolean }) => {
    const q = kw.trim();
    if (!q) {
      setItems([]);
      setError(null);
      setParams({}, { replace: true });
      return;
    }

    const rid = ++requestIdRef.current; // 이번 요청 ID
    try {
      setLoading(true);
      setError(null);

      const result = await searchStores(q);
      if (rid !== requestIdRef.current) return;

      setItems(result);
      if (opts?.updateUrl !== false) {
        setParams({ keyword: q }, { replace: false });
      }
    } catch {
      if (rid !== requestIdRef.current) return; // 이전 요청의 에러는 무시
      setError('검색 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.');
    } finally {
      if (rid === requestIdRef.current) setLoading(false);
    }
  };

  // 결과 클릭 → 상세로 이동
  const goDetail = (id: string | number) => {
    navigate(generatePath(ROUTE_PATH.STORE_DETAIL, { id: String(id) }));
  };

  return (
    <Page>
      <SearchHeader
        value={keyword}
        onChange={setKeyword}
        onSubmit={() => submit()}
        onBack={() => navigate(-1)}
      />

      {loading && <Empty>검색 중…</Empty>}
      {!loading && error && <Empty>{error}</Empty>}

      {!loading && !error && keyword.trim().length === 0 && (
        <SearchEmpty message='검색어를 입력해보세요.' navHeight={NAV_HEIGHT} />
      )}

      {!loading &&
        !error &&
        keyword.trim().length > 0 &&
        items.length === 0 && (
          <SearchEmpty
            message='일치하는 매장을 찾지 못했어요.'
            navHeight={NAV_HEIGHT}
          />
        )}

      {!loading && !error && items.length > 0 && (
        <SearchResults
          results={items.map((s) => ({
            store: { ...s, id: Number(s.id) },
            distanceM: null,
          }))}
          onSelect={(s) => goDetail(s.id)}
        />
      )}
    </Page>
  );
}

const Page = styled.div`
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  min-height: 100dvh;
  padding-bottom: calc(${NAV_HEIGHT}px + env(safe-area-inset-bottom, 0px));
  background: #fff;
`;
const Empty = styled.div`
  display: grid;
  place-items: center;
  padding: 40px 16px;
  color: #8b8f94;
  font-size: 13px;
`;
