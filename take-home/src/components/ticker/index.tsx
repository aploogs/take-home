import React from "react";
// import { restClient } from "@polygon.io/client-js";
import {
  Box,
  Button,
  Grid,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import CustomDatePicker from "../date-picker";
import StockRow from "../stock-row";
import { restClient } from "@polygon.io/client-js";
import { format, subDays, parse } from "date-fns";

type TickerProps = {
  onClick?: () => void;
};

const dateFormat = "yyyy/MM/dd";
const today = format(new Date(), dateFormat);
const referenceDate = new Date(1970, 0, 1, 0, 0, 0);

//!!things to fix-
//?shared state between the closing price for each ticker. tied to the issue I'm having with state anyway
//?styling
//?date-picker

const Ticker: React.FC<TickerProps> = ({ onClick }) => {
  const quickDate = new Date();
  const formattedDate = format(quickDate, dateFormat);
  const [date, setDate] = React.useState(today);

  const [symbol, setSymbol] = React.useState({
    stock1: "",
    stock2: "",
    stock3: "",
  });

  const [finalClosePrice, setFinalClosePrice] = React.useState<number | string>(
    ""
  );
  const [finalClosePrice2, setFinalClosePrice2] = React.useState<
    number | string
  >("");
  const [finalClosePrice3, setFinalClosePrice3] = React.useState<
    number | string
  >("");
  const today2 = new Date();
  //!here is where I would want to sub in a value that the user selects for how many days back they want to see. Right now we are just going to use static values
  //! I don't think I can just throw in a value here from the calendar, so I'll include helper text that says not to select the current day
  const lastPrice2 = subDays(today2, 1);

  //this is horrible, but I couldn't figure out how to get the .env file working. it significantly changed the direction of the project
  const stocks = restClient("3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi").stocks;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setSymbol((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));
  };

  const convertDate = (date: any) => {
    let stringDate: string = date.toString();
    const dateWithDashes = stringDate.split("/").join("-");
    return dateWithDashes;
  };

  const handleDateChange = (date: any) => {
    let formattedDateString = format(date, dateFormat);
    console.log({ formattedDateString });
    setDate(formattedDateString);
  };

  const datefnsDate = parse(date, dateFormat, referenceDate);

  const findStock = async (symbol?: string) => {
    const allStocks = await stocks
      .aggregates(
        `${symbol}`,
        1,
        "day",
        `${convertDate(date)}`,
        `${convertDate(date)}`
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

  const findStock2 = async (symbol?: string) => {
    const allStocks = await stocks
      .aggregates(
        `${symbol}`,
        1,
        "day",
        `${convertDate(date)}`,
        `${convertDate(date)}`
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
    setFinalClosePrice2(price);
    return allStocks;
  };
  const findStock3 = async (symbol?: string) => {
    const allStocks = await stocks
      .aggregates(
        `${symbol}`,
        1,
        "day",
        `${convertDate(date)}`,
        `${convertDate(date)}`
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
    setFinalClosePrice3(price);
    return allStocks;
  };

  const handleSubmit = () => {
    //for the record, this implementation is so frustrating to me. I want a better way to pass the stocks in but it seems to be escaping me right now.
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
              handleInputChange={handleInputChange}
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
              closePrice={finalClosePrice2}
            />
          </Grid>
          <Grid item mb={2} lg={10}>
            <StockRow
              handleInputChange={handleInputChange}
              symbol={symbol.stock3}
              name="stock3"
              closePrice={finalClosePrice3}
            />
          </Grid>
          <Grid item justifyContent="center" lg={2}>
            <CustomDatePicker value={datefnsDate} onChange={handleDateChange} />
            <Button onClick={handleSubmit}>Show stonks</Button>
          </Grid>
          {/* <p>Price: {price !== null ? `$${price.toFixed(2)}` : "Loading..."}</p> */}
        </Grid>
      </form>
    </Box>
  );
};

export default Ticker;
