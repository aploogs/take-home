import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import NavBar from "../nav-bar";

const Home: React.FC = () => {
  return (
    <>
      <Box>
        <Grid pt={10} container>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid xl={12} item>
            <Typography>Here is some text</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
