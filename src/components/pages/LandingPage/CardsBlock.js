import { Button, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/styles/makeStyles";
import gridBackground from "../../../assets/images/squares.png";

//Aos Animations
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${gridBackground})`,
  },
  cardTypo: {
    color: theme.palette.common.capresBlue,
    fontFamily: "Raleway",
    fontWeight: "600",
  },
  cardMedia: {
    width: "400px",
    height: "300px",
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "350px",
      height: "250px",
    },
  },
  cardItem: {
    margin: theme.spacing(2),
  },
  cardActionArea: {
    "& .MuiCardActionArea-root": {
      width: "100%",
      display: "flex",
      textAlign: "center",
      flexDirection: "column",
    },
  },
  buttonRoot: {
    borderRadius: 0,
    borderColor: "#F8CD4D",
    /* left: "3em", */
    width: "12rem",
    height: "3rem",
    marginTop: "1rem",
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
  },
  buttonLabel: {
    color: theme.palette.primary.light,
  },
  gridItem: {
    "& .MuiGrid-item": {
      height: "20rem",
    },
  },
}));

export default function CardsBlock() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={classes.root}
        style={{ textAlign: "center", height: "50rem" }}
      >
        <Card
          className={classes.cardItem}
          style={{ width: "40rem", background: "transparent", border: "none" }}
          elevation={0}
          data-aos="flip-right"
        >
          <CardContent>
            <Grid container direction="column">
              <Grid item>
                <Typography className={classes.cardTypo} variant="h2">
                  Socios
                </Typography>
                <Typography
                  variant="subtitle1"
                  /* style={{ marginBottom: "3rem" }} */
                >
                  Nuestros asociados pueden solicitar alguno de los
                  <br />
                  servicios que presta la institución.
                </Typography>
                <Button
                  variant="outlined"
                  classes={{
                    root: classes.buttonRoot,
                    label: classes.buttonLabel,
                  }}
                  href="/socios"
                  target="_blank"
                >
                  Leer mas...
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
