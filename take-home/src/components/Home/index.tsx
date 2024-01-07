import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import NavBar from "../nav-bar";
import { restClient } from "@polygon.io/client-js";

import ContentBlock from "../content-blocks";
import RootCalculator from "../root-calculator";

//we're gonna do a few containers here. one container for each problem I'm writing code for.
//each problem container will be a distinct component that I wrap in a grid item.

const Home: React.FC = () => {
  const [price, setPrice] = React.useState("");
  const [findingPrice, setFindingPrice] = React.useState(false);
  const stocks = restClient("3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi").stocks;

  const findAAPL = async () => {
    const apple = await stocks
      .aggregates("AAPL", 1, "day", "2023-01-01", "2023-01-03")
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.error("An error happened", e);
      });

    console.log("stocky", apple);

    return apple;
  };

  //this is morgan stanley, NOT microsoft
  const findMS = async () => {
    const stockyBoi = await stocks
      .aggregates("MS", 1, "day", "2023-01-01", "2023-01-03")

      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.error("An error happened", e);
      });

    console.log("stocky2", stockyBoi);

    return stockyBoi;
  };
  const findAMZN = async () => {
    const stockyBoi = await stocks
      .aggregates("AMZN", 1, "day", "2023-01-01", "2023-01-03")
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.error("An error happened", e);
      });

    console.log("stocky3", stockyBoi);

    return stockyBoi;
  };

  const handleFindStonk = () => {
    findAAPL();
    findMS();
    findAMZN();
  };

  const loading = findingPrice;

  return (
    <>
      <Container>
        <Grid pt={10} container>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <RootCalculator />
          </Grid>
          <Grid sx={{ backgroundColor: "pink" }} item xs={12}>
            <ContentBlock onClick={handleFindStonk} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
