import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import Div100vh from "react-div-100vh";

function App() {
  return (
    <div className="App">
      <Div100vh>
        <ThemeProvider theme={theme}>
          <SGlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Div100vh>
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
