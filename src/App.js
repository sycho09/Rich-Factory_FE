import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useRoutes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import routes from "./util/routes";
import theme from "./theme/theme";

function App() {
  const routers = useRoutes(routes);
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          {routers}
        </StyledThemeProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
