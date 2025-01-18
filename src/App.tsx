import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { SelectedOptionProvider } from "./providers/SelectedOptionProvider";

function App() {
  return (
    <div className="App">
      <SelectedOptionProvider>
        <ThemeProvider theme={theme}>
          <SGlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </SelectedOptionProvider>
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
