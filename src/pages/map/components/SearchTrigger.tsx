import styled from '@emotion/styled';
import { Search } from 'lucide-react';

type Props = { onClick: () => void; className?: string };

export default function SearchTrigger({ onClick, className }: Props) {
  return (
    <Wrap
      type='button'
      onClick={onClick}
      className={className}
      aria-label='검색 페이지 열기'
    >
      <span>매장 검색하기</span>
      <Search size={18} />
    </Wrap>
  );
}

const Wrap = styled.button`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]}; // 8px

  background: ${({ theme }) => theme.colors.gray[0]};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.spacing[6]}; // 24px
  padding: ${({ theme }) =>
    `${theme.spacing[2]} ${theme.spacing[3]}`}; // 8px 12px
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);

  cursor: text;

  overflow: hidden;
  min-width: 0;

  span {
    color: ${({ theme }) => theme.colors.gray[70]};
    font-size: ${({ theme }) => theme.spacing[3]}; // 12px

    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  svg {
    flex: none;
    color: ${({ theme }) => theme.colors.gray[50]}; // #888
  }
`;
