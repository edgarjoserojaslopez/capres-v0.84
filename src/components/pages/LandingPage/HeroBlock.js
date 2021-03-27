import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/img6.jpg";
import { HorizontalSplitSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    background:
      "linear-gradient(15deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));",
    backgroundImage: `url(${bgImage})`,
  },
  services: {
    position: "relative",
  },
  textClass: {
    fontFamily: "Roboto",
    fontSize: "8em",
    fontWeight: "700",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "6rem",
      fontWeight: "700",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.65rem",
      fontWeight: "700",
    },
  },
  textClassSubtitle: {
    fontSize: "3em",
    fontWeight: "400",
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
      fontWeight: "600",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
      fontWeight: "600",
    },
  },
  buttonRoot: {
    borderRadius: 0,
    left: "3em",
    width: "10rem",
    height: "4rem",
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
      fontWeight: "700",
      width: "8rem",
      height: "3.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      left: "0.5rem",
      fontSize: "0.65rem",
      fontWeight: "700",
      width: "7rem",
      height: "2.8rem",
      margin: "0px",
      padding: "0px",
    },
    "& .MuiButton-label": {
      color: theme.palette.common.capresBlue,
      fontWeight: 600,
      fontSize: "1rem",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      "& .MuiButton-label": {
        color: theme.palette.common.capresOrange,
      },
    },
  },
}));

export default function HeroBlock() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="stretch"
      direction="column"
      /*  flexWrap="no-wrap" */
      /* spacing={2} */
    >
      <Grid item className={classes.services}>
        {/* Hero BLock */}
        <Typography component="div" classes={{ body1: classes.textClass }}>
          <Box textAlign="justify" lineHeight={1} m={4}>
            Bienvenido a<br />
            CAPRES
          </Box>
        </Typography>
        <Typography
          component="div"
          classes={{ body1: classes.textClassSubtitle }}
        >
          <Box textAlign="justify" lineHeight={1} m={4}>
            Estamos para servirte...
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Box component="div" m={2} p={2}>
              <Button
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel,
                }}
                variant="contained"
                color="secondary"
                size="large"
                href="/login"
              >
                Tu cuenta
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box component="div" m={2} p={2}>
              <Button
                classes={{ root: classes.buttonRoot }}
                variant="outlined"
                color="secondary"
                size="large"
                href="/registro"
              >
                Registrate
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
