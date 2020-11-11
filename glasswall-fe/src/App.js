import React from "react";
import Routes from "./Routes";
import myadvTheme from "./theme.js";
import { ThemeProvider } from "@material-ui/styles";

export const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

function App() {
  return (
    <ThemeProvider theme={myadvTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
// <AppContext userToken>