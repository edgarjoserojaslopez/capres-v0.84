import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
    flexGrow: 1,
  },
}));

const Login = () => {
  const classes = useStyles();
  return <div className={classes.backGround}>Login Page</div>;
};

export default Login;
