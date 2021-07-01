import React from "react";
import { Wrapper } from "./App.style";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper className="App">APKA</Wrapper>
    </ThemeProvider>
  );
}

export default App;
