import { Global, ThemeProvider } from '@emotion/react';
import { GlobalResetStyle } from '@/styles/reset';
import { GlobalTypographyStyle } from '@/styles/typography';
import { theme } from './styles/theme';
import Router from '@/routes/router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
