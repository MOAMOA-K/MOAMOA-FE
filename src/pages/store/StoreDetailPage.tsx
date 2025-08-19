import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { getStoreDetail } from './apis/store';
import type { StoreDetailDTO } from './types';
import { MapPin } from 'lucide-react';

const NAV_HEIGHT = 70;

export default function StoreDetailPage() {
  const { id } = useParams<{ id: string }>();
  console.log('detail id =', id, typeof id);
  const [data, setData] = useState<StoreDetailDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  // 현재 위치
  useEffect(() => {
    const fb = { lat: 35.8889, lng: 128.6109 };
    if (!navigator.geolocation) return setOrigin(fb);
    navigator.geolocation.getCurrentPosition(
      (p) => setOrigin({ lat: p.coords.latitude, lng: p.coords.longitude }),
      () => setOrigin(fb),
      { enableHighAccuracy: true, maximumAge: 10_000 },
    );
  }, []);

  console.log('[Detail] param id =', id, typeof id);

  useEffect(() => {
    // ⬇️ effect 진입 시점에도 확인
    console.log('[Detail effect] id =', id);

    if (!id) {
      // id가 없을 때 로딩만 계속되는 문제 방지
      setErr('잘못된 경로입니다.');
      setLoading(false);
      return;
    }

    const ac = new AbortController();
    setLoading(true);

    getStoreDetail(Number(id))
      .then((d) => {
        console.log('[Detail] loaded storeId =', d.id);
        setData(d);
      })
      .catch((e) => {
        console.error('[Detail] load error:', e);
        setErr('불러오기에 실패했어요.');
      })
      .finally(() => setLoading(false));

    return () => ac.abort();
  }, [id]);

  const distance = useMemo(() => {
    if (!data || !origin) return null;
    const R = 6371000;
    const toRad = (d: number) => (d * Math.PI) / 180;
    const dLat = toRad(data.latitude - origin.lat);
    const dLng = toRad(data.longitude - origin.lng);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(origin.lat)) *
        Math.cos(toRad(data.latitude)) *
        Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  }, [data, origin]);
  const fmtDist =
    distance == null
      ? ''
      : distance < 1000
        ? `${distance}m`
        : `${(distance / 1000).toFixed(1)}km`;

  if (loading) return <Page>로딩 중…</Page>;
  if (err || !data) return <Page>가게 정보를 불러오지 못했어요.</Page>;

  return (
    <Page>
      <Header>
        <TitleRow>
          <h1>{data.name}</h1>
          {data.category && <Category>{krCategory(data.category)}</Category>}
        </TitleRow>
        <Actions>{/* 알림/공유 아이콘 등 들어갈 자리 */}</Actions>
      </Header>

      <Hero>
        {data.imageUrl ? (
          <img src={data.imageUrl} alt={data.name} />
        ) : (
          <Placeholder />
        )}
      </Hero>

      <MetaRow>
        <span>
          <MapPin size={16} /> {fmtDist}
        </span>
        {data.openingTime && <span>{data.openingTime}</span>}
      </MetaRow>

      <PrimaryButton
        onClick={() => {
          /* 피드백 플로우 진입 */
        }}
      >
        피드백 보내기
      </PrimaryButton>

      <Section>
        <SectionTitle>개선사항</SectionTitle>
        <Column>
          {data.storeAnnouncements.length === 0 && (
            <Empty>아직 등록된 개선사항이 없어요.</Empty>
          )}
          {data.storeAnnouncements.map((a) => (
            <Card key={a.id}>
              <Label>고객 의견</Label>
              <p>{a.feedbackContent}</p>
              <Reply>
                <Label>사장님 개선</Label>
                <p>{a.content}</p>
              </Reply>
            </Card>
          ))}
        </Column>
      </Section>

      <Section>
        <SectionTitle>메뉴</SectionTitle>
        <MenuGrid>
          {data.menus.map((m) => (
            <MenuCard key={m.id}>
              <Thumb>
                {m.imageUrl ? (
                  <img src={m.imageUrl} alt={m.name} />
                ) : (
                  <Placeholder />
                )}
              </Thumb>
              <strong>{m.name}</strong>
              <span>{m.price.toLocaleString()}원</span>
            </MenuCard>
          ))}
        </MenuGrid>
      </Section>

      <BottomSpacer />
    </Page>
  );
}

function krCategory(c?: string) {
  switch (c) {
    case 'KOREAN':
      return '한식';
    case 'CHINESE':
      return '중식';
    case 'JAPANESE':
      return '일식';
    case 'WESTERN':
      return '양식';
    case 'CAFE':
      return '카페';
    default:
      return c ?? '';
  }
}

const Page = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 16px 16px calc(${NAV_HEIGHT}px + env(safe-area-inset-bottom, 0px));
  background: #fff;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 800;
  }
`;
const Category = styled.span`
  padding: 2px 8px;
  border-radius: 999px;
  background: #f2f4f6;
  color: #4b5563;
  font-size: 12px;
`;
const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Hero = styled.div`
  width: 100%;
  height: 180px;
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
const Placeholder = styled.div`
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

const MetaRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 12px 0 12px;
  color: #111;
  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
  }
`;

const PrimaryButton = styled.button`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 44px;
  padding: 0 20px;
  margin: 8px 0;

  border: 0;
  border-radius: 20px;
  background: #3b82f6;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const Section = styled.section`
  margin-top: 12px;
`;
const SectionTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Card = styled.div`
  border: 1px solid #dbe0e6;
  border-radius: 12px;
  padding: 12px;
  p {
    margin: 4px 0 0;
    color: #111;
  }
`;

const Empty = styled.div`
  color: #9ca3af;
  font-size: 14px;
  text-align: center;
  padding: 16px 0;
`;
const Label = styled.div`
  color: #6b7280;
  font-size: 12px;
`;
const Reply = styled.div`
  margin-top: 8px;
  padding-left: 10px;
  border-left: 2px solid #e5e7eb;
  p {
    margin: 4px 0 0;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;
const MenuCard = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 8px;
  strong {
    display: block;
    margin-top: 6px;
  }
  span {
    color: #4b5563;
    font-size: 13px;
  }
`;
const Thumb = styled.div`
  width: 100%;
  height: 96px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const BottomSpacer = styled.div`
  height: ${NAV_HEIGHT}px;
`;
