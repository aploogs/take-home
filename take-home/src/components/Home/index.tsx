import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import NavBar from "../nav-bar";
import axios from "axios";
import { restClient } from "@polygon.io/client-js";

import { useQuery, gql } from "@apollo/client";

//we're gonna do a few containers here. one container for each problem I'm writing code for.
//each problem container will be a distinct component that I wrap in a grid item.

const Home: React.FC = () => {
  const rest = restClient("3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi").stocks;

  // console.log("rest", rest.stocks.aggregates);

  const findAppleStonk = async () => {
    const stockyBoi = await rest
      .aggregates("AAPL", 1, "day", "2022-01-01", "2022-01-03")
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.error("An error happened", e);
      });

    console.log("stocky", stockyBoi);

    return stockyBoi;
  };

  const handleFindStonk = () => {
    findAppleStonk();
  };

  // console.log("stonk", stonk);

  // const rqst = axios.get(
  //   "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-10-10/2023-10-10?adjusted=true&sort=asc&limit=120&apiKey=3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi"
  // );

  // const realOne = axios
  //   .get(
  //     `https://api/polygon.io/v2/aggs/ticker/${"AAPL"}/range/1/day/${"2023-12-10"}/${"2023-12-10"}?`,
  //     {
  //       params: {
  //         // stocksTicker: "AAPL",
  //         // multiplier: 1,
  //         // from: "2023-12-10",
  //         // to: "2023-12-10",
  //         adjusted: true,
  //         sort: "asc",
  //         limit: 120,
  //         apiKey: "3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi",
  //       },
  //     }
  //   )
  //   .then((res) => {
  //     console.log("res", res);
  //     const thingy = res;

  //     return thingy;
  //   });

  // console.log("rqst", rqst);

  // console.log("realOne", realOne);

  // const lastStonk = rest.stocks
  //   .lastQuote("AAPL")
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((e) => {
  //     console.error("An error happened:", e);
  //   });

  // // console.log("stonk", stonk);
  // console.log("lastStonk", lastStonk);
  // // const grabStock = axios.get(rest, )

  return (
    <>
      <Box>
        <Grid pt={10} container>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid sx={{ backgroundColor: "black" }} item xs={12}>
            <Typography>problem container 1</Typography>
            <Button onClick={handleFindStonk}>Find stock</Button>
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
