import '@emotion/react';
import { EmotionTheme } from '@/styles/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends EmotionTheme {}
}
