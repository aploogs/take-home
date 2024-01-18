"use client";
import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../nav-bar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import RootCalculator from "../root-calculator";
import Ticker from "../ticker";

const Home: React.FC = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid pt={1} container maxWidth={1900}>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item lg={12}>
            <RootCalculator />
          </Grid>
          <Grid item lg={12}>
            <Ticker />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
};

export default Home;
