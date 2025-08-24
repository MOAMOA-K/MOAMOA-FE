const gray = {
  0: '#ffffff', // 흰색
  10: '#f7f8f9', // 가장 밝은 회색
  20: '#f3f4f5',
  30: '#eeeff1',
  40: '#dcdee3',
  50: '#d1d3d8',
  60: '#b0b3ba',
  70: '#868b94',
  80: '#555d6d',
  90: '#2a3038',
  100: '#1a1c20', // 검은색
};

export const theme = {
  colors: {
    gray,
    // 시맨틱 색상 (의미 기반 컬러 토큰)
    default: {
      background: '#fafcfe',
      white: gray[0],
      blue: '#287eec',
    },
    customer: {
      background: '#fafcfe',
      main: '#da2127',
      disabled: '#F4BFC1',
      dark: '#9C171C',
    },
    owner: {
      background: '#fafcfe',
      main: '#34495e',
      disabled: '#c5cbd1',
      dark: '#1d2935',
    },
    tag: {
      star: '#f1f436',
      COMPLIMENT: '#e5ffd4',
      SUGGESTION: '#dbe9fe',
      COMPLAINT: '#ffdcda',
    },
    feedback: {
      UNREAD: '#FFF7ED',
      DONE: '#EEF7FF',
    },
    // 텍스트 색상
    text: {
      default: gray[90], // 기본 텍스트
      sub: gray[70], // 보조 텍스트
      white: gray[0], // 흰색 텍스트
    },
  },

  // 타이포그래피 (폰트 스타일)
  typography: {
    // 제목
    title1: {
      fontSize: '1.5rem', // 24px
      lineHeight: '2rem', // 32px
    },
    title2: {
      fontSize: '1.25rem', // 20px
      lineHeight: '1.6875rem', // 27px
    },

    // 부제목
    subtitle1: {
      fontSize: '1.125rem', // 18px
      lineHeight: '1.5rem', // 24px
    },
    subtitle2: {
      fontSize: '1rem', // 16px
      lineHeight: '1.375rem', // 22px
    },

    // 본문
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: '1.375rem', // 22px
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: '1.1875rem', // 19px
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },

  // 여백/간격 (Spacing)
  spacing: {
    0: '0px', // 간격 없음
    1: '4px', // 최소 간격
    2: '8px',
    3: '12px',
    4: '16px', // 기본 간격
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px', // 최대 간격
  },
};

export type EmotionTheme = typeof theme;
