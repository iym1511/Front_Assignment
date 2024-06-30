import React from "react";
import Todo from "./components/Todo";
import { createGlobalStyle, ThemeProvider } from "styled-components";

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
        <Todo />
      </div>
    </ThemeProvider>
  );
};

export default App;
