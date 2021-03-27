import { createMuiTheme } from "@material-ui/core/styles";

const capresBlue = "#0B72B9";
const capresOrange = "#F8CD4D";
const capresGrey = "#868686";

const theme = createMuiTheme({
  palette: {
    common: {
      capresBlue: capresBlue,
      capresOrange: capresOrange,
    },
    primary: {
      main: capresBlue,
    },
    secondary: {
      main: capresOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    login: {
      fontWeight: "600",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    h1: {
      fontFamily: "Montserrat",
      fontSize: "2.25rem",
      color: capresBlue,
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1.75rem",
      color: capresBlue,
      fontWeight: 500,
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "1.75rem",
      color: capresBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: capresGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    learnbutton: {
      borderRadius: 0,
      borderColor: capresOrange,
    },
    body1: {
      fontWeight: 500,
    },
  },
});

export default theme;
