"use client";
import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../nav-bar";
import "../../styles/home.module.scss";

import RootCalculator from "../root-calculator";
import Ticker from "../ticker";

const Home: React.FC = () => {
  return (
    <>
      <Grid pt={1} container maxWidth={1900}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item className="calculator" lg={12}>
          <RootCalculator />
        </Grid>
        <Grid item className="ticker" lg={12}>
          <Ticker />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
