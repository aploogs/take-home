import React from "react";
// import { restClient } from "@polygon.io/client-js";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CustomDatePicker from "../date-picker";
import StockRow from "../stock-row";
import { restClient } from "@polygon.io/client-js";
import { subDays } from "date-fns";

type TickerProps = {
  onClick?: () => void;
};

//!!things to fix-
//?shared state between the closing price for each ticker. tied to the issue I'm having with state anyway
//?styling
//?date-picker

const Ticker: React.FC<TickerProps> = ({ onClick }) => {
  const [date, setDate] = React.useState<string>("");
  const [symbol, setSymbol] = React.useState({
    stock1: "",
    stock2: "",
    stock3: "",
  });

  const [finalClosePrice, setFinalClosePrice] = React.useState<number>(0);
  // const [findingPrice, setFindingPrice] = React.useState(false);
  const today = new Date();
  //!here is where I would want to sub in a value that the user selects for how many days back they want to see. Right now we are just going to use static values
  const lastPrice2 = subDays(today, 1);

  console.log("lastPRice", lastPrice2);
  const stocks = restClient("3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi").stocks;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event.target.value);
    const { name, value } = event?.target;
    setSymbol((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));
  };

  const findStock = async (symbol?: Object, from?: string, to?: string) => {
    console.log("symbol2", symbol);
    // const { stock1, stock2, stock3 } = symbol;
    const allStocks = await stocks
      .aggregates(
        `${symbol}`,
        1,
        "day",
        //let's look to dynamically pass in a number for the dates as well
        "2024-01-04",
        "2024-01-04"
      )
      .then((data) => {
        const prices = data;
        const closePrice = prices?.results?.[0].c;
        return closePrice;
      })
      .catch((e) => {
        console.error("an error occurred", e);
      });
    const price = allStocks ? allStocks : 0;
    // console.log
    // set;
    setFinalClosePrice(price);
    return allStocks;
  };
  const findStock2 = async (symbol?: string, from?: string, to?: string) => {
    const allStocks = await stocks
      .aggregates(
        `${symbol}`,
        1,
        "day",
        //let's look to dynamically pass in a number for the dates as well
        "2024-01-04",
        "2024-01-04"
      )
      .then((data) => {
        const prices = data;
        const closePrice = prices?.results?.[0].c;
        return closePrice;
      })
      .catch((e) => {
        console.error("an error occurred", e);
      });

    const price = allStocks ? allStocks : 0;
    setFinalClosePrice(price);
    return allStocks;
  };
  const findStock3 = async (symbol?: string, from?: string, to?: string) => {
    const allStocks = await stocks
      .aggregates(
        `${symbol}`,
        1,
        "day",
        //let's look to dynamically pass in a number for the dates as well
        "2024-01-04",
        "2024-01-04"
      )
      .then((data) => {
        const prices = data;
        const closePrice = prices?.results?.[0].c;
        return closePrice;
      })
      .catch((e) => {
        console.error("an error occurred", e);
      });

    const price = allStocks ? allStocks : 0;
    setFinalClosePrice(price);
    return allStocks;
  };

  // //this is morgan stanley, NOT microsoft

  const handleSubmit = () => {
    findStock(symbol.stock1);
    findStock2(symbol.stock2);
    findStock3(symbol.stock3);
  };
  return (
    <Box>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Typography>
              Here you can actually choose which stock you'd like to query. You
              can select 3 at a time, and will be given the price at close for
              whichever day you choose.
            </Typography>
          </Grid>

          <Grid item mb={2} lg={10}>
            <StockRow
              handleInputChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(event)
              }
              symbol={symbol.stock1}
              name="stock1"
              closePrice={finalClosePrice}
            />
          </Grid>
          <Grid item mb={2} lg={10}>
            <StockRow
              handleInputChange={handleInputChange}
              symbol={symbol.stock2}
              name="stock2"
              closePrice={finalClosePrice}
            />
          </Grid>
          <Grid item mb={2} lg={10}>
            <StockRow
              handleInputChange={handleInputChange}
              symbol={symbol.stock3}
              name="stock3"
              closePrice={finalClosePrice}
            />
          </Grid>
          <Grid item justifyContent="center" lg={2}>
            <CustomDatePicker
              value={new Date()}
              onChange={() => console.log("changed")}
            />
            <Button onClick={handleSubmit}>Show stonks</Button>
          </Grid>
          {/* <p>Price: {price !== null ? `$${price.toFixed(2)}` : "Loading..."}</p> */}
        </Grid>
      </form>
    </Box>
  );
};

export default Ticker;
