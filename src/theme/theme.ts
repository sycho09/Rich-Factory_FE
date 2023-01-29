import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

interface DefaultColorOption {
  default: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    shape: {
      borderRadius?: number;
      boxShadow?: string;
    };
  }
  interface ThemeOptions {
    shape: {
      borderRadius?: number;
      boxShadow?: string;
    };
  }

  interface PaletteColor {
    // 사용하는 곳에서 에러
    lightdark?: string;
  }

  interface PaletteColorOptions {
    // 현재 파일에서 에러
    main?: string;
    dark?: string;
    light?: string;
    lightdark?: string;
  }

  interface PaletteOptions {
    red?: DefaultColorOption;
  }
  interface Shape {
    boxShadow?: string;
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    laptop: true;
  }
}

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
    secondary: {
      main: grey[100],
      dark: "#585858",
    },
    red: {
      default: "#d74040",
    },

    background: {
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
