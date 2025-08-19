export const LetterTag = [
  { value: 'positive', label: '칭찬' },
  { value: 'improve', label: '제안' },
  { value: 'complain', label: '불만' },
] as const;

export type LetterTagType = (typeof LetterTag)[number]['value'];
