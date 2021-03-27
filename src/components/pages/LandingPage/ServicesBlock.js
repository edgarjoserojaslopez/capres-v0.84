import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import ButtonArrow from "../../ui/ButtonArrow";
import { blue } from "@material-ui/core/colors";
import retirosImg from "../../../assets/svg/undraw_transfer_money_rywa.svg";
import onlineBanking from "../../../assets/svg/undraw_online_banking_7jy4.svg";
import homeImg from "../../../assets/svg/undraw_at_home_octe.svg";
import vehicleImg from "../../../assets/svg/undraw_Vehicle_sale_a645.svg";
import fepImg from "../../../assets/svg/undraw_mobile_user_7oqo.svg";
import { makeStyles } from "@material-ui/core/styles";
import gridBackground from "../../../assets/images/squares.png";

//Aos Animations
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  root: {
    background: `url(${gridBackground})`,
  },
  imgServices: {
    height: "25rem",
    width: "25rem",
  },
  services: {
    height: "15rem",
  },
  buttonServicesRoot: {
    borderRadius: 0,
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
  buttonServicesLabel: {
    color: theme.palette.primary.light,
  },
}));

export default function ServicesBlock() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
      justify="space-around"
    >
      <Grid item>
        {/* Servicios Block */}
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-evenly"
          spacing={10}
          style={{ backgroundColor: "#E6E6E6" }}
        >
          <Grid item data-aos="fade-up">
            <Typography variant="h4">Retiro de Haberes</Typography>
            <Typography variant="subtitle1">
              Los asociados pueden solicitar retiro de haberes en dos
              modalidades:
            </Typography>
            <Typography variant="subtitle1">
              Retiro Parcial o Retiro Total
            </Typography>
            <Button
              variant="outlined"
              classes={{
                root: classes.buttonServicesRoot,
                label: classes.buttonServicesLabel,
              }} /* className={classes.learnButton} */
              color="secondary"
              href="/haberes"
              target="_blank"
            >
              <span style={{ marginRight: 10 }}>Saber más...</span>
              <ButtonArrow width={10} height={10} fill={blue[700]} />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.imgServices}
              alt="retiro de haberes"
              src={retirosImg}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* Servicios Block 01 */}
        <Grid
          className={classes.root}
          container
          direction="row-reverse"
          alignItems="center"
          justify="space-evenly"
          spacing={10}
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <Grid item data-aos="fade-down">
            <Typography variant="h4">Préstamos Personales</Typography>
            <Typography variant="subtitle1">
              Los asociados pueden solicitar préstamos personales en tres
              modalidades:
            </Typography>
            <Typography variant="subtitle1">
              Corto , Mediano y Largo Plazo
            </Typography>
            <Button
              variant="outlined"
              classes={{
                root: classes.buttonServicesRoot,
                label: classes.buttonServicesLabel,
              }}
              color="secondary"
              href="/prestamos"
              target="_blank"
            >
              <span style={{ marginRight: 10 }}>Saber más...</span>
              <ButtonArrow width={10} height={10} fill={blue[700]} />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.imgServices}
              alt="préstamos personales"
              src={onlineBanking}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-evenly"
          spacing={10}
          style={{ backgroundColor: "#E6E6E6" }}
        >
          <Grid item data-aos="fade-up">
            <Typography variant="h4">Préstamos de Vivienda</Typography>
            <Typography variant="subtitle1">
              Los préstamos de Vivienda son de dos tipos:
            </Typography>
            <Typography variant="subtitle1">
              Adquisición o Remodelación de la vivienda principal.
            </Typography>
            <Button
              variant="outlined"
              classes={{
                root: classes.buttonServicesRoot,
                label: classes.buttonServicesLabel,
              }}
              color="secondary"
              href="/vivienda"
              target="_blank"
            >
              <span style={{ marginRight: 10 }}>Saber más...</span>
              <ButtonArrow width={10} height={10} fill={blue[700]} />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.imgServices}
              alt="préstamos de vivienda"
              src={homeImg}
            />
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.root}
          container
          direction="row-reverse"
          alignItems="center"
          justify="space-evenly"
          spacing={10}
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <Grid data-aos="fade-down">
            <Typography variant="h4">
              Préstamos para Adquisicion de Vehículos
            </Typography>
            <Typography variant="subtitle1">
              Estos préstamos se otorgan con reserva de dominio a favor de
              CAPRES.
            </Typography>
            <Typography variant="subtitle1">
              A cancelar en cinco (5) años.
            </Typography>
            <Button
              variant="outlined"
              classes={{
                root: classes.buttonServicesRoot,
                label: classes.buttonServicesLabel,
              }}
              color="secondary"
              href="/vehiculos"
              target="_blank"
            >
              <span style={{ marginRight: 10 }}>Saber más...</span>
              <ButtonArrow width={10} height={10} fill={blue[700]} />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.imgServices}
              alt="prestamos vehiculos"
              src={vehicleImg}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-evenly"
          spacing={10}
          style={{ backgroundColor: "#E6E6E6" }}
        >
          <Grid item data-aos="fade-up">
            <Typography variant="h4">Fondo Especial para Programas</Typography>
            <Typography variant="subtitle1">
              El FEP se ha constituido para financiar, entre otros, lo
              siguientes:
            </Typography>
            <Typography variant="subtitle1">
              Turismo y Recreación, Línea Blanca, Línea Marrón, etc.
            </Typography>
            <Button
              variant="outlined"
              classes={{
                root: classes.buttonServicesRoot,
                label: classes.buttonServicesLabel,
              }}
              color="secondary"
              href="/fondo"
              target="_blank"
            >
              <span style={{ marginRight: 10 }}>Saber más...</span>
              <ButtonArrow width={10} height={10} fill={blue[700]} />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.imgServices} alt="fondo FEP" src={fepImg} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
