import React from "react";
import ServicesBlock from "./ServicesBlock";
import HeroBlock from "./HeroBlock";
import { Box } from "@material-ui/core";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Box overflow="hidden">
        <HeroBlock />
        <ServicesBlock />
      </Box>
    </React.Fragment>
  );
};

export default LandingPage;
