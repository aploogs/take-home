import React from "react";
import { Grid, TextField, Typography } from "@mui/material/";

type StockRowProps = {
  symbol: string;
  closePrice: number;
  openPrice: number;
};

const StockRow: React.FC<StockRowProps> = ({
  symbol,
  closePrice,
  openPrice,
}) => {
  return (
    <Grid container>
      <Grid item lg={6}>
        <TextField label="Symbol" value={symbol} />
      </Grid>
      <Grid item lg={2}>
        <Typography>{closePrice}</Typography>
      </Grid>
      <Grid item lg={2}>
        <Typography>{openPrice}</Typography>
      </Grid>
    </Grid>
  );
};

export default StockRow;
