// eslint-disable-next-line import/prefer-default-export
import { createTheme } from "@mui/material/styles";
import { UIButtonVariants } from "../utils/enum";
import {
  PALATTE_PRIMARY_MAIN_COLOR,
  PALATTE_SECONDARY_MAIN_COLOR,
  TEXT_PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR,
} from "../constant/constantColor";

const theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

export default createTheme(theme, {
  palette: {
    primary: {
      light: "rgb(255 177 164)",
      main: PALATTE_PRIMARY_MAIN_COLOR,
      dark: "rgb(217 144 132)",
    },
    secondary: {
      dark: "#3A3A3A",
      main: PALATTE_SECONDARY_MAIN_COLOR,
      light: "#FFFFFF",
    },
    text: {
      primary: TEXT_PRIMARY_COLOR,
      secondary: TEXT_SECONDARY_COLOR,
    },
    background: {
      paper: "#F7F7F7",
      default: "#C7CDDB",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: UIButtonVariants.CONTAINED },
          style: {
            fontWeight: "500",
            fontSize: "1.075rem",
            "&:hover": {
              backgroundColor: "rgb(255 177 164)",
            },
          },
        },
        {
          props: { variant: UIButtonVariants.OUTLINED },
          style: {
            fontSize: "1.075rem",
            "&:hover": {
              backgroundColor: "rgb(255 177 164)",
            },
          },
        },
      ],
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: {
          "& a": {
            color: PALATTE_PRIMARY_MAIN_COLOR,
            textDecoration: "none",
            "&:hover": {
              color: "rgb(255 177 164)",
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0f0f0",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgb(255 177 164)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          padding: "12px 16px",
        },
        head: {
          fontWeight: "bold",
          fontSize: "1.3rem",
        },
        body: {
          fontSize: "1.01rem",
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h5" },
          style: {
            color: TEXT_PRIMARY_COLOR,
            fontSize: "1.125rem",
          },
        },
        {
          props: { variant: "h6" },
          style: {
            color: TEXT_PRIMARY_COLOR,
            fontSize: "1.075rem",
            lineHeight: "1.5rem",
          },
        },
        {
          props: { variant: "body1" },
          style: {
            color: TEXT_PRIMARY_COLOR,
            fontSize: "1rem",
          },
        },
        {
          props: { variant: "body2" },
          style: {
            color: TEXT_SECONDARY_COLOR,
            fontSize: "1rem",
          },
        },
      ],
    },
  },
});
