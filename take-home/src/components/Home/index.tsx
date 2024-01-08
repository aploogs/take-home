import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import NavBar from "../nav-bar";
import { restClient } from "@polygon.io/client-js";
import { format, isWeekend, subDays } from "date-fns";

import ContentBlock from "../content-blocks";
import RootCalculator from "../root-calculator";
import { DatePicker } from "@mui/x-date-pickers";
import Ticker from "../ticker";
import styles from "./home.module.scss";

//each problem container will be a distinct component that I wrap in a grid item.

const Home: React.FC = () => {
  return (
    <>
      <Grid pt={1} container maxWidth={1600}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid className={styles.calculator} item xs={12}>
          <RootCalculator />
        </Grid>
        <Grid sx={{ backgroundColor: "pink" }} item xs={12}>
          {/* <ContentBlock onClick={handleFindStonk} /> */}
          <Ticker />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
