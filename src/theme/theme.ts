import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            WebkitTextFillColor: "#f0f",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#1a73e8",
      dark: "#2C3E5B",
      light: "#89BADC",
      lightdark: "#75ACC6",
    },
    red: {
      main: "#d74040",
    },
    grey: {
      main: "rgb(240, 241, 243)",
      second: "#585858",
    },

    background: {
      // default: "#f9f9f9",
      default: "#fff",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: [
      "Pretendard",
      "Noto Sans KR",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  shape: {
    borderRadius: 2,
    boxShadow: "1px 1px 4px 1px rgba(0,0,0,0.2)",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      laptop: 1040,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
