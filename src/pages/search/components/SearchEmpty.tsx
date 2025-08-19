import styled from '@emotion/styled';

type Props = {
  message: string;
  navHeight: number; // 하단 네비 높이 반영
};

export default function SearchEmpty({ message, navHeight }: Props) {
  return (
    <Empty style={{ height: `calc(100dvh - 56px - ${navHeight}px)` }}>
      <p>{message}</p>
    </Empty>
  );
}

const Empty = styled.div`
  display: grid;
  place-items: center;
  color: #8b8f94;
  font-size: 13px;
`;
