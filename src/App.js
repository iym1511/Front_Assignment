import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Main from "./components/Main";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Arial, sans-serif;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <div>
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default App;
