import React from "react";
import { CssBaseline } from "@material-ui/core";

import { ThemeProvider } from "@material-ui/core";
import theme from "./components/ui/theme";
import { Route, Switch } from "react-router-dom";
//Pages
import Login from "./components/pages/Login";
import Servicios from "./components/pages/Servicios";
import LandingPage from "./components/pages/LandingPage/LandingPage";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/servicios">
            <Servicios />
          </Route>
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
