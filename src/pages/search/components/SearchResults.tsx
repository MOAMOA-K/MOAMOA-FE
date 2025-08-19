import styled from '@emotion/styled';
import type { Store } from '@/pages/map/mocks/stores';

export type SearchResult = { store: Store; distanceM: number | null };

type Props = {
  results: SearchResult[];
  onSelect: (s: Store) => void;
};

export default function SearchResults({ results, onSelect }: Props) {
  if (!results.length) return null;
  return (
    <List role='list'>
      {results.map(({ store, distanceM }) => (
        <Item key={store.id} role='listitem' onClick={() => onSelect(store)}>
          <Thumb>
            {store.image ? (
              <img src={store.image} alt={store.name} />
            ) : (
              <ThumbPlaceholder />
            )}
          </Thumb>
          <Info>
            <TitleRow>
              <Name>{store.name}</Name>
              {store.category && <Badge>{store.category}</Badge>}
            </TitleRow>
            <Meta>
              <span>
                {store.openTime && store.closeTime
                  ? `${store.openTime} - ${store.closeTime}`
                  : '영업시간 정보 없음'}
              </span>
              {typeof distanceM === 'number' && <Dot>•</Dot>}
              {typeof distanceM === 'number' && (
                <span>{formatDistance(distanceM)}</span>
              )}
            </Meta>
            <Addr>{store.address ?? '주소 정보 없음'}</Addr>
          </Info>
        </Item>
      ))}
    </List>
  );
}

/* helpers */
function formatDistance(m: number) {
  return m < 1000 ? `${Math.round(m)}m` : `${(m / 1000).toFixed(1)}km`;
}

/* styles (기존 그대로) */
const List = styled.ul`
  margin: 0;
  padding: 8px 0 0;
  list-style: none;
`;
const Item = styled.li`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #eee;
  background: #fff;
  cursor: pointer;
`;
const Thumb = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 12px;
  overflow: hidden;
  background: #f3f4f6;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
const ThumbPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    #f3f4f6,
    #f3f4f6 10px,
    #e5e7eb 10px,
    #e5e7eb 20px
  );
`;
const Info = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;
const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Badge = styled.span`
  flex: none;
  padding: 2px 8px;
  border-radius: 999px;
  background: #f2f4f6;
  color: #4b5563;
  font-size: 12px;
`;
const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 13px;
`;
const Dot = styled.span`
  opacity: 0.6;
`;
const Addr = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
