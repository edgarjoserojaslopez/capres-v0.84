import { AppBar, Button, Grid, Hidden, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//Router
import { BrowserRouter as Router } from "react-router-dom";
import Link from "@material-ui/core/Link";
//Logo
import Logo from "../../assets/images/capres.jpg";
//Icon Menu
import { TiThMenu } from "react-icons/ti";
import Login from "../pages/Login";
//Theme
/* import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../ui/theme";
import { green } from "@material-ui/core/colors"; */

const useStyles = makeStyles((theme) => ({
  logoStyle: {
    marginTop: "3px",
    padding: "5px",
    width: "75px",
    height: "75px",
  },
  toolbar: {
    /* minHeight: 128, */
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    /* padding: theme.spacing(3), */
    /*  marginBottom: theme.spacing(3), */
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      /* marginBottom: theme.spacing(9), */
    },
  },
  menuIconStyle: {
    fontSize: "2rem",
    width: "2.5rem",
    height: "2.5rem",
    color: "#fff",
  },
  buttonStyle: {
    background: theme.palette.secondary.light,
    border: 0,
    fontSize: 16,
    borderRadius: 0,
    boxShadow: theme.boxShadow,
    color: "white",
    height: 48,
    padding: "5px 20px",
    textTransform: "uppercase",
    outline: "none",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  typoStyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#fff",
  },
  button: {
    /* ...theme.typography.login, */
    /* ...theme.typography.learnButton, */
    "& .MuiButton-label": {
      color: theme.palette.common.capresBlue,
      fontWeight: 600,
      fontSize: "1rem",
    },

    /* marginLeft: "50px", */
    borderRadius: "0px",
    marginRight: "25px",
    /* margin: "auto", */
    fontFamily: "Montserrat",
    height: "45px",
    width: "10rem",

    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      "& .MuiButton-label": {
        color: theme.palette.common.capresOrange,
      },
    },
  },
}));

function Header() {
  const classes = useStyles();
  /* const theme = useTheme(); */

  return (
    <>
      <Router>
        <AppBar>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <img className={classes.logoStyle} src={Logo} alt="logo" />
              </Grid>
              <Hidden smDown>
                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item className={classes.typoStyle}>
                      Inicio
                    </Grid>
                    <Grid item className={classes.typoStyle}>
                      Servicios
                    </Grid>
                    <Grid item className={classes.typoStyle}>
                      Socios
                    </Grid>
                    <Grid item className={classes.typoStyle}>
                      Contacto
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    component={Link}
                    href="/login"
                  >
                    Loginn
                  </Button>
                </Grid>
              </Hidden>
              <Hidden smUp>
                <Grid item>
                  <Button type="button">
                    <TiThMenu className={classes.menuIconStyle} />
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </Router>
    </>
  );
}

export default Header;
