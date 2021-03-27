import React, { useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/images/capres.jpg";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core//Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: ".85em",
    },
  },
  capresLogo: {
    border: "none",
    height: "7em",
    padding: "2px",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  tabContainer: {
    margin: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
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
  },
  logoContainer: {
    /* margin: "auto", */
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.capresBlue,
    color: "#FFF",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.capresBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "white",
    marginRight: "10px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerItemSign: {
    backgroundColor: theme.palette.common.capresOrange,
  },
  appbar: {
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

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, value) => {
    props.setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menuOptions = [
    { name: "Servicios", link: "/servicios", activeIndex: 4, selectedIndex: 0 },
    {
      name: "Retiro de Haberes",
      link: "/haberes",
      activeIndex: 4,
      selectedIndex: 1,
    },
    {
      name: "Préstamos Personales",
      link: "/prestamos",
      activeIndex: 4,
      selectedIndex: 2,
    },
    {
      name: "Préstamos de Vivienda",
      link: "/vivienda",
      activeIndex: 4,
      selectedIndex: 3,
    },
    {
      name: "Préstamos de Vehículos",
      link: "/vehiculos",
      activeIndex: 4,
      selectedIndex: 4,
    },
    {
      name: "Fondo Especial para Programas (FEP)",
      link: "/fondo",
      activeIndex: 4,
      selectedIndex: 5,
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routes = [
    { name: "Inicio", link: "/", activeIndex: 0 },
    { name: "Nosotros", link: "/nosotros", activeIndex: 1 },
    { name: "Socios", link: "/socios", activeIndex: 2 },
    { name: "Delegados", link: "/delegados", activeIndex: 3 },
    {
      name: "Servicios",
      link: "/servicios",
      activeIndex: 4,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },

    { name: "Contacto", link: "/contacto", activeIndex: 5 },
    /* { name: "Dashboard", link: "/dashboard", activeIndex: 6 }, */
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaNowns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>

      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => props.setValue(5)}
        component={Link}
        to="/login"
      >
        Login
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(2);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 2}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            classes={{
              root: classes.drawerItemSign,
              selected: classes.drawerItemSelected,
            }}
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            component={Link}
            to="/login"
            selected={props.value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Login
            </ListItemText>
          </ListItem>
        </List>
        <div className={classes.toolbarMargin} />
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          style={{ overflowX: "hidden !important" }}
          position="fixed"
          className={classes.appbar}
        >
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img
                className={classes.capresLogo}
                src={logo}
                alt="logo capres"
              />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
