import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SGlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

const SGlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.styles.body.backgroundColor};
    color: ${(props) => props.theme.styles.body.color};
  }
`;
