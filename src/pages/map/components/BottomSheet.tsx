import styled from '@emotion/styled';

type Props = {
  open: boolean;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onClose: () => void;
};

export default function BottomSheet({
  open,
  title,
  subtitle,
  imageUrl,
  onClose,
}: Props) {
  return (
    <Dim data-open={open} onClick={onClose}>
      <Panel onClick={(e) => e.stopPropagation()}>
        <Grab />
        <Header>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </Header>
        <ImgBox>
          {imageUrl ? <img src={imageUrl} alt={title} /> : <Placeholder />}
        </ImgBox>
      </Panel>
    </Dim>
  );
}

const Dim = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: end center;
  background: rgba(0, 0, 0, 0.12);
  opacity: 0;
  pointer-events: none;
  transition: 0.2s;
  &[data-open='true'] {
    opacity: 1;
    pointer-events: auto;
  }
`;
const Panel = styled.div`
  width: 100%;
  max-width: 720px;
  background: #fff;
  border-radius: 16px 16px 0 0;
  padding: 12px 16px 24px;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.08);
`;
const Grab = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 999px;
  background: #e5e7eb;
  margin: 6px auto 12px;
`;
const Header = styled.div`
  h3 {
    margin: 0 0 4px;
    font-size: 16px;
  }
  p {
    margin: 0;
    color: #6b7280;
    font-size: 13px;
  }
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
  border-radius: 12px;
`;
