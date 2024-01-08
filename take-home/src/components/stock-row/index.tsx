import React from "react";
import { Grid, TextField, Typography } from "@mui/material/";
import styles from "./row.module.scss";

type StockRowProps = {
  symbol: string;
  name: string;
  closePrice: string | number;
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
      <Grid item lg={8}>
        <TextField
          onChange={handleInputChange}
          name={name}
          type="text"
          variant="filled"
          className={styles.textField}
          error={showError}
          label="Symbol"
          helperText={showError ? "*Too many letters" : null}
          value={symbol}
        />
      </Grid>
      <Grid item lg={3}>
        <Typography sx={{ color: "green", fontSize: 24 }}>
          {closePrice}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default StockRow;
