import React from "react";
import { Grid, TextField, Typography } from "@mui/material/";

type StockRowProps = {
  symbol: string;
  name: string;
  closePrice: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StockRow: React.FC<StockRowProps> = ({
  symbol,
  handleInputChange,
  name,
  closePrice,
}) => {
  const showError = symbol.length > 4;

  return (
    <Grid container>
      <Grid item lg={3}>
        <TextField
          onChange={handleInputChange}
          name={name}
          sx={{ maxHeight: 40 }}
          error={showError}
          label="Symbol"
          helperText={showError ? "*Too many letters" : null}
          value={symbol}
        />
      </Grid>
      <Grid item lg={6}>
        <Typography>{closePrice}</Typography>
      </Grid>
    </Grid>
  );
};

export default StockRow;
