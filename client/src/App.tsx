import React from "react";

import { ThemeProvider } from "styled-components";

import PageExample from "./pages/PageExample";
import { theme } from "./styles";
import GlobalStyle from "./styles/resets";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageExample />
    </ThemeProvider>
  );
}

export default App;
