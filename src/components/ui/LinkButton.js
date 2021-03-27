/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

export default function LinkRouter() {
  return (
    <Router>
      <div>
        <Link component={RouterLink} to="/">
          With prop forwarding
        </Link>
        <br />
      </div>
    </Router>
  );
}
