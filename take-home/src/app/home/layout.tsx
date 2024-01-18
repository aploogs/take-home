"use client";
import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../components/nav-bar";
import RootCalculator from "../../components/root-calculator";
import Ticker from "../../components/ticker";
import { TickerBackground } from "../../components/backgrounds/ticker-backround";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Grid pt={1} container maxWidth={1900}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item lg={12}>
          <RootCalculator />
        </Grid>
        <Grid component={TickerBackground} item lg={12}>
          <Ticker />
        </Grid>
      </Grid>
    </>
  );
};

export default HomeLayout;
