import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import NavBar from "../nav-bar";

//we're gonna do a few containers here. one container for each problem I'm writing code for.
//each problem container will be a distinct component that I wrap in a grid item.

const Home: React.FC = () => {
  return (
    <>
      <Box>
        <Grid pt={10} container>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid sx={{ backgroundColor: "black" }} item xs={12}>
            <Typography>problem container 1</Typography>
          </Grid>
          <Grid sx={{ backgroundColor: "pink" }} item xs={12}>
            <Typography>problem container 2</Typography>
          </Grid>
          <Grid sx={{ backgroundColor: "blue" }} item xs={12}>
            <Typography>problem container 3</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
