import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import routes from "./util/routes";
import theme from "./theme/theme";

function App() {
  const routers = useRoutes(routes);
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {routers}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
