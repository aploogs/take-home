import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import NavBar from "../nav-bar";
import { restClient } from "@polygon.io/client-js";
import { format, isWeekend, subDays } from "date-fns";

import ContentBlock from "../content-blocks";
import RootCalculator from "../root-calculator";
import { DatePicker } from "@mui/x-date-pickers";
import Ticker from "../ticker";

//each problem container will be a distinct component that I wrap in a grid item.

const Home: React.FC = () => {
  const [price, setPrice] = React.useState("");
  const [findingPrice, setFindingPrice] = React.useState(false);
  const today = new Date();
  //!here is where I would want to sub in a value that the user selects for how many days back they want to see. Right now we are just going to use static values
  const lastPrice2 = subDays(today, 1);

  console.log("lastPRice", lastPrice2);
  // const findPrices = () => {};
  const stocks = restClient("3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi").stocks;

  // const findStock = async (symbol: string, from: string, to: string) => {
  //   const allStocks = await stocks.aggregates(
  //     `${symbol}`,
  //     1,
  //     "day",
  //     //let's look to dynamically pass in a number for the dates as well
  //     "2023-01-01",
  //     "2023-01-03"
  //   );
  // };

  const findAAPL = async (symbol: string) => {
    const apple = await stocks
      .aggregates(`${symbol}`, 1, "day", "2023-01-01", "2023-01-03")
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.error("An error happened", e);
      });

    console.log("stocky", apple);
    //i can find price at last close for the most part, just approximated by one day
    //so, just pass a new date, minus one day
    // setPrice()

    return apple;
  };

  //this is morgan stanley, NOT microsoft
  const findMS = async () => {
    const stockyBoi = await stocks
      .aggregates("MS", 1, "day", "2024-01-05", "2024-01-05")

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
    // findAAPL();
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
            {/* <ContentBlock onClick={handleFindStonk} /> */}
            <Ticker />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
