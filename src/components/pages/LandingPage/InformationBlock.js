import { Button, Grid, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import infoBackground01 from "../../../assets/infoBackground01.svg";
import ButtonArrow from "../../ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  infoBackground: {
    backgroundImage: `url(${infoBackground01})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  buttonInfoRoot: {
    borderRadius: 0,
    /* left: "3em", */
    width: "12rem",
    height: "3rem",
    marginTop: "1rem",
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "1rem",
    "& .MuiButton-outlinedSecondary": {
      border: "1px solid #0b72b9",
    },
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
  buttonInfoLabel: {
    color: theme.palette.primary.light,
  },
  informationTypo: {
    color: theme.palette.common.capresBlue,
    fontFamily: "Raleway",
    fontWeight: "600",
  },
}));

export default function InformationBlock() {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.infoBackground}
        container
        style={{ height: "40rem" }}
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item data-aos="zoom-in">
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Typography className={classes.informationTypo} variant="h2">
              Acerca de nosotros
            </Typography>
            <Typography variant="subtitle2">Vamos a conocernos</Typography>
            <Button
              variant="outlined"
              classes={{
                root: classes.buttonInfoRoot,
                label: classes.buttonInfoLabel,
              }}
              color="secondary"
              style={{ borderColor: "#0B72B9" }}
              href="/nosotros"
              target="_blank"
            >
              <span style={{ marginRight: 10 }}>Saber más...</span>
              <ButtonArrow width={10} height={10} fill={blue[700]} />
            </Button>
          </Grid>
        </Grid>
        <Grid item data-aos="zoom-out">
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Typography className={classes.informationTypo} variant="h2">
              Contáctanos!!
            </Typography>
            <Typography variant="subtitle2">Habla con nosotros...</Typography>
            <Button
              variant="outlined"
              classes={{
                root: classes.buttonInfoRoot,
                label: classes.buttonInfoLabel,
              }}
              color="secondary"
              style={{ borderColor: "#0B72B9" }}
              href="/contacto"
              target="_blank"
            >
              <span style={{ marginRight: 10 }}>Saber más...</span>
              <ButtonArrow width={10} height={10} fill={blue[700]} />
            </Button>
          </Grid>
        </Grid>
        {/* <div className={classes.infoBackground} /> */}
      </Grid>
    </>
  );
}
