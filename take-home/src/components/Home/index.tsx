import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../nav-bar";

import RootCalculator from "../root-calculator";
import Ticker from "../ticker";
import styles from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <Grid pt={1} container maxWidth={1600}>
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
    </>
  );
};

export default Home;
