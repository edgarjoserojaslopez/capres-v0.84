import { Grid, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

import LeyAhorro from "../../assets/uploads/ley_cajas_ahorro.pdf";
import EstatutosCapres from "../../assets/uploads/estatutos.pdf";
const useStyles = makeStyles((theme) => ({
  lateralStyle: {
    backgroundColor: theme.palette.common.capresBlue,
    color: theme.palette.common.capresGrey,
    padding: theme.spacing(2),
  },
}));

export default function MarcoLegal() {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={4}>
        <Grid container direction="column" style={{ marginBottom: "16px" }}>
          <Grid item className={classes.lateralStyle}>
            <Typography variant="h3" style={{ color: "white" }}>
              Marco Legal
            </Typography>
          </Grid>
          <Grid item style={{ padding: "10px" }}>
            <Grid container direction="column">
              <ul>
                <li>
                  <Grid item>
                    <Link
                      href={LeyAhorro}
                      download
                      style={{ textDecoration: "none" }}
                    >
                      <Typography>Ley Cajas de Ahorro</Typography>
                    </Link>
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    <Link
                      href={EstatutosCapres}
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
    </div>
  );
}
