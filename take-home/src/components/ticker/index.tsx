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

const Ticker: React.FC<TickerProps> = ({ onClick }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [openingPrice, setOpeningPrice] = React.useState<number>(0);
  const [symbol, setSymbol] = React.useState({
    stock1: "",
    stock2: "",
    stock3: "",
  });
  // const [findingPrice, setFindingPrice] = React.useState(false);
  const today = new Date();
  //!here is where I would want to sub in a value that the user selects for how many days back they want to see. Right now we are just going to use static values
  const lastPrice2 = subDays(today, 1);

  console.log("lastPRice", lastPrice2);
  // const findPrices = () => {};
  const stocks = restClient("3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi").stocks;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event.target.value);
    const { name, value } = event?.target;
    setSymbol((prev) => ({
      ...prev,
      [name]: value,
    }));
    // setSymbol(event.target.value);
  };

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

  // const findAAPL = async (symbol: string) => {
  //   const apple = await stocks
  //     .aggregates(`${symbol}`, 1, "day", "2023-01-01", "2023-01-03")
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((e) => {
  //       console.error("An error happened", e);
  //     });

  //   console.log("stocky", apple);
  //   //i can find price at last close for the most part, just approximated by one day
  //   //so, just pass a new date, minus one day
  //   // setPrice()

  //   return apple;
  // };

  // //this is morgan stanley, NOT microsoft
  // const findMS = async () => {
  //   const stockyBoi = await stocks
  //     .aggregates("MS", 1, "day", "2024-01-05", "2024-01-05")

  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((e) => {
  //       console.error("An error happened", e);
  //     });

  //   console.log("stocky2", stockyBoi);

  //   return stockyBoi;
  // };
  // const findAMZN = async () => {
  //   const stockyBoi = await stocks
  //     .aggregates("AMZN", 1, "day", "2023-01-01", "2023-01-03")
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((e) => {
  //       console.error("An error happened", e);
  //     });

  //   console.log("stocky3", stockyBoi);

  //   return stockyBoi;
  // };

  // const handleFindStonk = () => {
  //   // findAAPL();
  //   findMS();
  //   findAMZN();
  // };

  // const loading = findingPrice;

  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              Here you can actually choose which stock you'd like to query. Due
              to API limitations, I can only do up to 3 stocks at a time - but
              this will give you the open and close price for any stock on
              whatever day you choose (besides today).
            </Typography>
          </Grid>

          <Grid item lg={12}>
            <StockRow
              handleInputChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(event)
              }
              symbol={symbol.stock1}
              name="stock1"
              closePrice={34}
              openPrice={33}
            />
          </Grid>
          <Grid item lg={12}>
            <StockRow
              handleInputChange={handleInputChange}
              symbol={symbol.stock2}
              name="stock2"
              closePrice={34}
              openPrice={33}
            />
          </Grid>
          <Grid item lg={12}>
            <StockRow
              handleInputChange={handleInputChange}
              symbol={symbol.stock3}
              name="stock3"
              closePrice={34}
              openPrice={33}
            />
          </Grid>
          <CustomDatePicker
            value={new Date()}
            onChange={() => console.log("changed")}
          />
          <Button onClick={(e) => setSymbol(symbol)}>Show stonks</Button>
          {/* <p>Price: {price !== null ? `$${price.toFixed(2)}` : "Loading..."}</p> */}
        </Grid>
      </form>
    </Box>
  );
};

export default Ticker;
