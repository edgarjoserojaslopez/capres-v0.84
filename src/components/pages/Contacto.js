import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
    flexGrow: 1,
  },
}));

const Contacto = () => {
  const classes = useStyles();
  return <div className={classes.backGround}>Contacto Page</div>;
};

export default Contacto;
