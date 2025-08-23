import { Global, ThemeProvider } from '@emotion/react';
import { GlobalResetStyle } from '@/styles/reset';
import { GlobalTypographyStyle } from '@/styles/typography';
import { theme } from './styles/theme';
import Router from '@/routes/router';
import AppLayout from '@/components/layout/AppLayout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/util/queryClient';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppLayout>
            <Router />
          </AppLayout>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
