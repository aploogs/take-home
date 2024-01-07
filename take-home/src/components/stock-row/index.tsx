import React from "react";
import { Grid, TextField, Typography } from "@mui/material/";

type StockRowProps = {
  symbol: string;
  name: string;
  closePrice: number;
  openPrice: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StockRow: React.FC<StockRowProps> = ({
  symbol,
  handleInputChange,
  name,
  closePrice,
  openPrice,
}) => {
  const returnCaps = symbol.toUpperCase();
  return (
    <Grid container>
      <Grid item lg={6}>
        <TextField
          onChange={handleInputChange}
          name={name}
          label="Symbol"
          value={returnCaps}
        />
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
