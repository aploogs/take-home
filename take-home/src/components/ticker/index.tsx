import React from "react";
// import { restClient } from "@polygon.io/client-js";
import { Grid, Typography } from "@mui/material";

type TickerProps = {
  symbol: string;
  onClick?: () => void;
};

const clients = ["MS", "AMZN", "AAPL"];

const Ticker: React.FC<TickerProps> = ({ symbol, onClick }) => {
  // const [price, setPrice] = React.useState("");
  // const [findingPrice, setFindingPrice] = React.useState(false);
  // const stocks = restClient("3wKdDchqH2CT1WpnzxgfI6zzjN6olsXi").stocks;

  // const findAAPL = async () => {
  //   const apple = await stocks
  //     .aggregates("AAPL", 1, "day", "2023-01-01", "2023-01-03")
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((e) => {
  //       console.error("An error happened", e);
  //     });

  //   console.log("stocky", apple);

  //   return apple;
  // };

  // //this is morgan stanley, NOT microsoft
  // const findMS = async () => {
  //   const stockyBoi = await stocks
  //     .aggregates("MS", 1, "day", "2023-01-01", "2023-01-03")

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
  //   findAAPL();
  //   findMS();
  //   findAMZN();
  // };

  return (
    <Grid container>
      {clients.map((client, idx) => (
        <Grid item xs={4} key={idx}>
          <Typography>{client}</Typography>
        </Grid>
      ))}
      {/* <p>Price: {price !== null ? `$${price.toFixed(2)}` : "Loading..."}</p> */}
    </Grid>
  );
};

export default Ticker;
