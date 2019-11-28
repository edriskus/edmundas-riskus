import { createMuiTheme } from "@material-ui/core";

const secondaryFont = "'Karla', sans-serif";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#EF9B13"
    },
    secondary: {
      main: "#BA274A"
    }
  },
  typography: {
    h1: {
      fontWeight: 900,
      fontSize: 125,
      letterSpacing: -5
    },
    h2: {
      fontWeight: 900,
      fontSize: 100,
      letterSpacing: -4
    },
    h3: {
      fontWeight: 900,
      fontSize: 80,
      letterSpacing: -3
    },
    h4: {
      fontWeight: 900,
      fontSize: 65,
      letterSpacing: -2,
      lineHeight: 1
    },
    h5: {
      fontWeight: 900,
      fontSize: 50,
      letterSpacing: -1,
      lineHeight: 1
    },
    h6: {
      fontWeight: 900,
      fontSize: 40,
      letterSpacing: -1,
      lineHeight: 1
    },
    body1: { fontFamily: secondaryFont },
    body2: { fontFamily: secondaryFont },
    subtitle2: { fontFamily: secondaryFont },
    button: { fontFamily: secondaryFont },
    caption: { fontFamily: secondaryFont },
    overline: { fontFamily: secondaryFont },
    subtitle1: {
      fontSize: 18,
      fontFamily: secondaryFont
    }
  }
});
