import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
    flexGrow: 1,
  },
}));

const Servicios = () => {
  const classes = useStyles();
  return <div className={classes.backGround}>Servicios Page</div>;
};

export default Servicios;
