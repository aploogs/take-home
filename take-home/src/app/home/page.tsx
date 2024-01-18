"use client";
import React from "react";
import { Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NavBar from "../../components/nav-bar";
import RootCalculator from "../../components/root-calculator";
import Ticker from "../../components/ticker";
import styles from "../../styles/home.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid pt={1} container maxWidth={1900}>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid className={styles.calculator} item lg={12}>
            <RootCalculator />
          </Grid>
          <Grid className={styles.ticker} item lg={12}>
            <Ticker />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
};

export default Home;
