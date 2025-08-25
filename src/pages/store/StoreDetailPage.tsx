import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, createSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { fetchStoreDetail, type StoreDetailDTO } from '@/api/store/store';
import { MapPin } from 'lucide-react';
import AppHeader from '@/components/layout/Header';
import { ROUTE_PATH } from '@/routes/paths';

const NAV_HEIGHT = 70;

export default function StoreDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<StoreDetailDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const navigate = useNavigate();
  const heroSrc = `/assets/store/${data?.id}.jpg`;
  const menuImgSrc = (storeId: number, menuId: number) =>
    `/assets/menu/${storeId}_${menuId}.jpg`;

  useEffect(() => {
    const fb = { lat: 35.8889, lng: 128.6109 };
    if (!navigator.geolocation) return setOrigin(fb);
    navigator.geolocation.getCurrentPosition(
      (p) => setOrigin({ lat: p.coords.latitude, lng: p.coords.longitude }),
      () => setOrigin(fb),
      { enableHighAccuracy: true, maximumAge: 10_000 },
    );
  }, []);

  useEffect(() => {
    if (!id) {
      setErr('잘못된 경로입니다.');
      setLoading(false);
      return;
    }
    const ac = new AbortController();
    setLoading(true);

    fetchStoreDetail(Number(id))
      .then((d) => setData(d))
      .catch(() => setErr('불러오기에 실패했어요.'))
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

  // 백엔드 필드명에 맞춤
  const menus = Array.isArray(data.menuList) ? data.menuList : [];
  const announcements = Array.isArray(data.announcementList)
    ? data.announcementList
    : [];

  return (
    <Page>
      <AppHeader onBack={() => navigate(-1)} />
      <Header>
        <TitleRow>
          <h1>{data.name}</h1>
          {data.category && <Category>{krCategory(data.category)}</Category>}
        </TitleRow>
        <Actions>{/* 알림/공유 자리 */}</Actions>
      </Header>

      <Hero>
        <img src={heroSrc} alt={data.name} />
      </Hero>

      <MetaRow>
        <span>
          <MapPin size={16} /> {fmtDist}
        </span>
        {data.openingTime && <span>{data.openingTime}</span>}
      </MetaRow>

      <PrimaryButton
        onClick={() => {
          const qs = createSearchParams({
            storeId: String(data.id),
            storeName: data.name,
          });
          navigate(`${ROUTE_PATH.LETTER}?${qs.toString()}`, {
            state: { storeId: data.id, storeName: data.name },
          });
        }}
      >
        피드백 보내기
      </PrimaryButton>

      <Section>
        <SectionTitle>개선사항</SectionTitle>
        <Column>
          {announcements.length === 0 && (
            <Empty>아직 등록된 개선사항이 없어요.</Empty>
          )}
          {announcements.map((a) => (
            <Card key={a.id}>
              {a.feedbackContent && (
                <>
                  <Label>고객 의견</Label>
                  <p>{a.feedbackContent}</p>
                </>
              )}
              {(a.content || a.description) && (
                <Reply>
                  <Label>사장님 개선</Label>
                  <p>{a.content || a.description}</p>
                </Reply>
              )}
            </Card>
          ))}
        </Column>
      </Section>

      <Section>
        <SectionTitle>메뉴</SectionTitle>
        <MenuGrid>
          {menus.length === 0 && <Empty>등록된 메뉴가 없습니다.</Empty>}
          {menus.map((m) => {
            const localSrc = menuImgSrc(data.id, m.id);
            return (
              <MenuCard key={m.id}>
                <Thumb>
                  <img src={localSrc} alt={m.name} />
                </Thumb>
                <strong>{m.name}</strong>
                <span>{m.price.toLocaleString()}원</span>
              </MenuCard>
            );
          })}
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
  padding: 0px 15px calc(${NAV_HEIGHT}px + env(safe-area-inset-bottom, 0px));
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
// const Placeholder = styled.div`
//   width: 100%;
//   height: 100%;
//   background: repeating-linear-gradient(
//     45deg,
//     #f3f4f6,
//     #f3f4f6 10px,
//     #e5e7eb 10px,
//     #e5e7eb 20px
//   );
// `;
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
  background: ${({ theme }) => theme.colors.customer.main};
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
