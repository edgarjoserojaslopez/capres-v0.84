import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

/* import EstructuraPage from "../pages/NosotrosPage/EstructuraPage"; */

import React from "react";
import { MemoryRouter as Router } from "react-router-dom";

import EstructuraCapres from "../../assets/uploads/Estructura_Organizativa.pdf";
const useStyles = makeStyles((theme) => ({
  lateralStyle: {
    backgroundColor: theme.palette.common.capresBlue,
    color: theme.palette.common.capresGrey,
    padding: theme.spacing(2),
  },
}));

export default function Historia() {
  const classes = useStyles();
  const clickLink = (props) => {
    window.location.href = props;
  };

  return (
    <div>
      <Router>
        <Paper elevation={4}>
          <Grid container direction="column" style={{ marginBottom: "16px" }}>
            <Grid item className={classes.lateralStyle}>
              <Typography variant="h3" style={{ color: "white" }}>
                Historia
              </Typography>
            </Grid>
            <Grid item style={{ padding: "10px" }}>
              <Grid container direction="column">
                <ul>
                  <li>
                    <Grid item>
                      <Link
                        href="/historia/"
                        onClick={clickLink}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography>Historia de CAPRES</Typography>
                      </Link>
                    </Grid>
                  </li>
                  <li>
                    <Grid item>
                      <Link href="/junta" style={{ textDecoration: "none" }}>
                        <Typography>Junta Directiva</Typography>
                      </Link>
                    </Grid>
                  </li>
                  <li>
                    <Grid item>
                      <Link
                        href="/organizacion"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography>Organización Administrativa</Typography>
                      </Link>
                    </Grid>
                  </li>
                  <li>
                    <Grid item>
                      <Link
                        href={EstructuraCapres}
                        download
                        style={{ textDecoration: "none" }}
                      >
                        <Typography>Estatutos CAPRES</Typography>
                      </Link>
                    </Grid>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Router>
    </div>
  );
}
