import * as React from "react";
import {
  AppBar,
  Grid,
  Link,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import capreslogo from "../../assets/images/capres.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
  {
    title: `Nosotros`,
    path: `/nosotros`,
  },
  {
    title: `Servicios`,
    path: `/servicios`,
  },
  {
    title: `Socios`,
    path: `/socios`,
  },
  {
    title: `Contacto`,
    path: `/contacto`,
  },
];

const useStyles = makeStyles((theme) => ({
  styledLogo: {
    marginTop: "4px",
    width: "64px",
    height: "64px",
  },
}));

const Header4 = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link href="/">
              <img
                className={classes.styledLogo}
                src={capreslogo}
                alt="capreslogo"
              />
            </Link>
          </Grid>
          <Grid item>
            <Grid container spacing={4}>
              {navLinks.map(({ title, path }) => (
                <Grid item>
                  <RouterLink
                    to={path}
                    key={title}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItem button>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            type="body2"
                            style={{ color: `theme.palette.grey[500]` }}
                          >
                            {title}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </RouterLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>Login</Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header4;
