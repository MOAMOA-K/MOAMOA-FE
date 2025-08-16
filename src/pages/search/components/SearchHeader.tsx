import styled from '@emotion/styled';
import { ArrowLeft, Search as SearchIcon } from 'lucide-react';

type Props = {
  query: string;
  onChange: (v: string) => void;
  onBack: () => void;
};

export default function SearchHeader({ query, onChange, onBack }: Props) {
  return (
    <Header>
      <IconBtn aria-label='뒤로가기' onClick={onBack}>
        <ArrowLeft size={22} />
      </IconBtn>

      <SearchWrap>
        <input
          autoFocus
          value={query}
          placeholder='가게를 찾아보세요'
          onChange={(e) => onChange(e.target.value)}
          aria-label='가게 검색'
        />
        <SearchIcon size={18} />
      </SearchWrap>
    </Header>
  );
}

/* styles (기존과 동일) */
const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 56px;
  padding: 0 12px;
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`;
const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  color: #111;
`;
const SearchWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f6f7f9;
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 8px 12px;
  input {
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 14px;
    color: #111;
    ::placeholder {
      color: #8b8f94;
    }
  }
  svg {
    color: #888;
  }
`;
