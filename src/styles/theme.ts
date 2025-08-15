const gray = {
  gray00: '#ffffff', // 흰색
  gray100: '#f7f8f9', // 가장 밝은 회색
  gray200: '#f3f4f5',
  gray300: '#eeeff1',
  gray400: '#dcdee3',
  gray500: '#d1d3d8',
  gray600: '#b0b3ba',
  gray700: '#868b94',
  gray800: '#555d6d',
  gray900: '#2a3038',
  gray1000: '#1a1c20', // 검은색
};

export const theme = {
  colors: {
    gray,
    // 시맨틱 색상 (의미 기반 컬러 토큰)
    semantic: {
      // 배경 색상
      background: {
        default: '#ffffff',
        customer: '#fafcfe',
        owner: '#fff8f8',
      },
      button: {
        customer: {
          default: '#287eec',
          disabled: '#c1daf9',
        },
        owner: {
          default: '#f27e76',
          disabled: '#fbdad7',
        },
      },

      tag: {
        star: '#f1f436',
        positive: '#e5ffd4',
        improve: '#dbe9fe',
        complain: '#ffdcda',
      },

      // 텍스트 색상
      text: {
        default: gray.gray900, // 기본 텍스트
        sub: gray.gray500, // 보조 텍스트
      },
    },
  },

  // 타이포그래피 (폰트 스타일)
  typography: {
    // 제목
    title1Bold: {
      fontSize: '1.25rem', // 20px
      fontWeight: 700,
      lineHeight: '1.6875rem', // 27px
    },
    title1Regular: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '1.6875rem',
    },
    title2Bold: {
      fontSize: '1rem', // 16px
      fontWeight: 700,
      lineHeight: '1.5rem', // 24px
    },
    title2Regular: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },

    // 부제목
    subtitle1Bold: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.375rem', // 22px
    },
    subtitle1Regular: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.375rem', // 22px
    },
    subtitle2Bold: {
      fontSize: '0.875rem', // 14px
      fontWeight: 700,
      lineHeight: '1.1875rem', // 19px
    },
    subtitle2Regular: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.1875rem',
    },

    // 본문
    body1Bold: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.375rem', // 22px
    },
    body1Regular: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.375rem',
    },
    body2Bold: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.1875rem', // 19px
    },
    body2Regular: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.1875rem',
    },
  },

  // 여백/간격 (Spacing)
  spacing: {
    spacing0: '0px', // 간격 없음
    spacing1: '4px', // 최소 간격
    spacing2: '8px',
    spacing3: '12px',
    spacing4: '16px', // 기본 간격
    spacing5: '20px',
    spacing6: '24px',
    spacing7: '28px',
    spacing8: '32px',
    spacing9: '36px',
    spacing10: '40px',
    spacing11: '44px',
    spacing12: '48px',
    spacing13: '52px',
    spacing14: '56px',
    spacing15: '60px',
    spacing16: '64px', // 최대 간격
  },
};

export type EmotionTheme = typeof theme;
