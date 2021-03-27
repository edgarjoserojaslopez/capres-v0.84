import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    /* marginBottom: "2em", */
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: ".85em",
    },
  },
  buttonLabel: {
    color: theme.palette.grey[100],
  },
  appbar: {
    position: "fixed",
    zIndex: theme.zIndex.modal + 1,
    width: "100%",
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
export default function Header2() {
  const classes = useStyles();
  return (
    <ElevationScroll>
      <AppBar
        style={{ overflowX: "hidden !important" }}
        position="fixed"
        className={classes.appbar}
      >
        <Toolbar disableGutters className={classes.toolbarMargin}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>LOGO</Grid>
            <Grid item>
              <Grid container className={classes.root}>
                <Button className={classes.buttonLabel} href="/">
                  Inicio
                </Button>
                <Button
                  className={classes.buttonLabel}
                  href="/nosotros"
                  color="secondary"
                >
                  Nosotros
                </Button>
                <Button
                  className={classes.buttonLabel}
                  href="/socios"
                  color="secondary"
                >
                  Socios
                </Button>
                <Button
                  className={classes.buttonLabel}
                  href="/servicios"
                  color="secondary"
                >
                  Servicios
                </Button>
                <Button
                  className={classes.buttonLabel}
                  href="/delegados"
                  color="secondary"
                >
                  Delegados
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Button href="/login">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
