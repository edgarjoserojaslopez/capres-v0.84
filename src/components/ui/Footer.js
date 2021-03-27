import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.capresBlue,
    width: "100%",
    height: "20em",
    position: "relative",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1302,
    [theme.breakpoints.down("md")]: {
      height: "12em",
      position: "fixed",
    },
    [theme.breakpoints.down("xs")]: {
      height: "7em",
      position: "fixed",
    },
  },
  mainContainer: {
    position: "relative",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridContainerRoot: {
    flexDirection: "column",
    justifyContent: "flex-end",
    aligItems: "center",
  },
  gridItem: {
    margin: "2em",
  },
  icon: {
    textDecoration: "none",
    color: "white",
    height: "2.5em",
    width: "2.5em",
    [theme.breakpoints.down("xs")]: {
      height: "2em",
      width: "2em",
    },
  },
  socialContainer: {
    /* position: "relative",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "auto",
      bottom: 0,
    }, */
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    right: "1.5em",
    padding: "15px",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      marginTop: "auto",
      /* bottom: "auto", */
      justifyContent: "center",
      alignItems: "center",

      padding: "3em",
      position: "sticky",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "auto",
      /* bottom: "auto", */
      justifyContent: "center",
      alignItems: "center",

      padding: "1.0em",
      position: "sticky",
    },
  },
  copyRight: {
    /* justifyContent: "flex-start", */
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      marginTop: "-10px",
    },
  },
  copyRightTypography: {
    fontSize: "1em",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.85em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className="main-footer">
      <footer className={classes.footer}>
        <Grid container className={classes.gridContainerRoot}>
          <Hidden mdDown>
            <Grid
              container
              justify="center"
              /* spacing={2} */
              className={classes.mainContainer}
            >
              <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(0)}
                    to="/"
                    className={classes.link}
                  >
                    Inicio
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(1)}
                    to="/nosotros"
                    className={classes.link}
                  >
                    Nosotros
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(1)}
                    to="/nosotros"
                    className={classes.link}
                  >
                    Historia
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(1)}
                    to="/nosotros"
                    className={classes.link}
                  >
                    Junta Directiva
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(1)}
                    to="/nosotros"
                    className={classes.link}
                  >
                    Organización Administrativa
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(1)}
                    to="/nosotros"
                    className={classes.link}
                  >
                    Estructura Organizativa
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(2);
                      props.setSelectedIndex(0);
                    }}
                    to="/servicios"
                    className={classes.link}
                  >
                    Servicios
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(2);
                      props.setSelectedIndex(1);
                    }}
                    to="/retiro"
                    className={classes.link}
                  >
                    Retiro de Haberes
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(2);
                      props.setSelectedIndex(2);
                    }}
                    to="/prestamos"
                    className={classes.link}
                  >
                    Préstamos Personales
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(2);
                      props.setSelectedIndex(3);
                    }}
                    to="/vehiculos"
                    className={classes.link}
                  >
                    Préstamos Vehículos
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(2);
                      props.setSelectedIndex(4);
                    }}
                    to="/viviendas"
                    className={classes.link}
                  >
                    Préstamos Viviendas
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(2);
                      props.setSelectedIndex(5);
                    }}
                    to="/fondo"
                    className={classes.link}
                  >
                    Fondo Especial para Programas (FEP)
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(3);
                      props.setSelectedIndex(0);
                    }}
                    to="/socios"
                    className={classes.link}
                  >
                    Socios
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(3);
                      props.setSelectedIndex(1);
                    }}
                    to="/socios"
                    className={classes.link}
                  >
                    Requisitos
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(3);
                      props.setSelectedIndex(2);
                    }}
                    to="/socios"
                    className={classes.link}
                  >
                    Afiliacion
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(3);
                      props.setSelectedIndex(3);
                    }}
                    to="/socios"
                    className={classes.link}
                  >
                    Desafiliación
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(4)}
                    to="/contacto"
                    className={classes.link}
                  >
                    Contacto
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Grid
            container
            /* justify="center"
          alignItems="center" */
            className={classes.socialContainer}
          >
            <Grid
              item
              component={"a"}
              href="http://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook className={classes.icon} />
            </Grid>
            <Grid
              item
              component={"a"}
              href="http://www.twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Twitter className={classes.icon} />
            </Grid>
            <Grid
              item
              component={"a"}
              href="http://www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram className={classes.icon} />
            </Grid>
          </Grid>
          <Grid container direction="column" className={classes.copyRight}>
            <Grid item>
              <Typography className={classes.copyRightTypography}>
                © CAPRES {new Date().getFullYear()}. Todos los derechos
                reservados
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
