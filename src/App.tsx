import { Global, ThemeProvider } from "@emotion/react";
import { GlobalResetStyle } from "@/styles/reset";
import { GlobalTypographyStyle } from "@/styles/typography";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
    </ThemeProvider>
  );
}

export default App;
