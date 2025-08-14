import { Global, ThemeProvider } from '@emotion/react';
import { GlobalResetStyle } from '@/styles/reset';
import { GlobalTypographyStyle } from '@/styles/typography';
import { theme } from './styles/theme';
import Router from '@/routes/router';
import AppLayout from '@/components/layout/AppLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <AppLayout>
        <Router />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
