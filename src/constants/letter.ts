export const LetterTag = [
  { value: 'COMPLIMENT', label: '칭찬' },
  { value: 'SUGGESTION', label: '제안' },
  { value: 'COMPLAINT', label: '불만' },
] as const;

export type LetterTagType = (typeof LetterTag)[number]['value'];
