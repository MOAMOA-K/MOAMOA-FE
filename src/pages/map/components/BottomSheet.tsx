import styled from '@emotion/styled';

type Props = {
  open: boolean;
  title?: string;
  subtitle?: string;
  storeId?: number;
  /** (옵션) 백엔드에서 온 URL은 폴백으로만 사용 */
  imageUrl?: string;
  onClose: () => void;
  onClickDetail?: () => void;
};

export default function BottomSheet({
  open,
  title,
  subtitle,
  imageUrl,
  onClose,
  onClickDetail,
}: Props) {
  const finalSrc = imageUrl;

  return (
    <Dim open={open} onClick={onClose} aria-hidden={!open}>
      <Panel
        open={open}
        role='dialog'
        aria-modal='true'
        aria-labelledby='bs-title'
        aria-describedby='bs-subtitle'
        onClick={(e) => {
          e.stopPropagation();
          onClickDetail?.();
        }}
        tabIndex={0}
        aria-label='가게 상세로 이동'
      >
        <Grab />
        <Header>
          {title && <Title id='bs-title'>{title}</Title>}
          {subtitle && <Subtitle id='bs-subtitle'>{subtitle}</Subtitle>}
        </Header>
        <ImgBox>
          {finalSrc ? (
            <img
              src={`assets/${finalSrc}.jpg`}
              alt={title ?? 'store image'}
              loading='lazy'
              onError={(e) => {
                // 자산/백엔드 경로 모두 실패하면 기본 이미지로 폴백
                e.currentTarget.src = '/assets/store/default.jpg';
              }}
            />
          ) : (
            <Placeholder />
          )}
        </ImgBox>
      </Panel>
    </Dim>
  );
}

type OpenProp = { open: boolean };

const Dim = styled.div<OpenProp>`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: end center;
  background: rgba(0, 0, 0, 0.12);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity 0.2s ease;
`;

const Panel = styled.div<OpenProp>`
  width: 100%;
  max-width: 720px;
  background: #fff;
  border-radius: 16px 16px 0 0;
  padding: 8px 12px 16px;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(${({ open }) => (open ? '0' : '8px')});
  transition: transform 0.24s ease;
  cursor: pointer;
`;

const Grab = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 999px;
  background: #e5e7eb;
  margin: 4px auto 8px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h3`
  margin: 0;
  color: #111;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
`;

const ImgBox = styled.div`
  margin-top: 12px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  background: #f8fafc;
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
  border-radius: 12px;
  background: repeating-linear-gradient(
    45deg,
    #f3f4f6,
    #f3f4f6 10px,
    #e5e7eb 10px,
    #e5e7eb 20px
  );
`;
