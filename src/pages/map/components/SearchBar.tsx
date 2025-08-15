import { Search } from 'lucide-react';
import styled from '@emotion/styled';
import { useState } from 'react';
//import type { KeyboardEvent } from 'react'; //추후에 엔터 이벤트 핸들링을 위해 사용

type Props = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (v: string) => void;
  onSubmit?: (v: string) => void;
  disabled?: boolean;
  className?: string;
};

export default function SearchBar({
  value,
  defaultValue = '',
  placeholder = '매장 검색하기',
  onChange,
  onSubmit,
  disabled,
  className,
}: Props) {
  //   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  //     if (e.key === 'Enter' && onSubmit) onSubmit(text);
  //   };

  const [internal, setInternal] = useState(defaultValue);
  const text = value ?? internal;

  const handleChange = (next: string) => {
    if (value === undefined) setInternal(next);
    onChange?.(next); // (있다면) 부모에도 알림
  };
  return (
    <Wrap className={className} data-disabled={disabled}>
      <Input
        value={text}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        //onKeyDown={handleKeyDown}
        aria-label={placeholder}
        disabled={disabled}
      />
      <IconButton
        type='button'
        aria-label='검색'
        onClick={() => onSubmit?.(text)}
        disabled={disabled}
      >
        <Search size={20} />
      </IconButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border-radius: 24px;
  padding: 8px 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid transparent;

  &[data-disabled='true'] {
    opacity: 0.6;
    pointer-events: none;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 14px;
  color: #111;
  ::placeholder {
    color: #8b8f94;
  }
`;

const IconButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #888;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: translateY(0.5px);
  }
`;
