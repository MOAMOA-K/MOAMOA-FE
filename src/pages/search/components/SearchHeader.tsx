import styled from '@emotion/styled';
import { ArrowLeft, Search as SearchIcon } from 'lucide-react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export default function SearchHeader({
  value,
  onChange,
  onSubmit,
  onBack,
}: Props) {
  return (
    <Header>
      <IconBtn aria-label='뒤로가기' onClick={onBack}>
        <ArrowLeft size={22} />
      </IconBtn>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <SearchBox>
          <input
            autoFocus
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='가게를 찾아보세요'
            aria-label='가게 검색'
          />
          <SubmitBtn type='submit' aria-label='검색'>
            <SearchIcon size={18} />
          </SubmitBtn>
        </SearchBox>
      </Form>
    </Header>
  );
}

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
  width: 36px;
  height: 36px;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: #111;
`;
const Form = styled.form`
  flex: 1;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f6f7f9;
  border-radius: 24px;
  padding: 8px 12px;
  input {
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 14px;
  }
`;
const SubmitBtn = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  color: #888;
  display: inline-flex;
`;
