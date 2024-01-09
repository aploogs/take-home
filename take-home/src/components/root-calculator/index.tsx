import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import styles from "./calculator.module.scss";
const RootCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [precisionValue, setPrecisionValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setResult("");
  };

  const handlePrecisionChange = (event: SelectChangeEvent) => {
    //i have a number for the precision
    //I have a number to be rooted
    // so I need to take the number that is rooted, and then use the number for precision to limit the rooted number
    let precision = event.target;
    setPrecisionValue(precision.value);
    setResult("");
  };

  const calculateSquareRoot = (inputValue: number, precisionValue: any) => {
    let x,
      x1 = inputValue / 2;
    if (!isNaN(inputValue)) {
      do {
        x = x1;
        x1 = (x + inputValue / x) / 2;
      } while (x !== x1);
      const customParse = (precisionValue: number, x: number) => {
        let tempValue = x.toString();
        tempValue = tempValue.slice(
          0,
          tempValue.indexOf(".") + precisionValue + 1
        );
        return tempValue;
      };
      x = customParse(precisionValue, x);
      setResult(x);
    } else {
      setResult("Please input a number");
    }
    return x;
  };

  return (
    <Box>
      <form>
        <Grid justifyContent="center" container spacing={2} flexDirection="row">
          <Grid sx={{ color: "white" }} item mt={10} mb={25} lg={12}>
            <Typography variant="h4">Square roots to precision</Typography>
          </Grid>
          <Grid item lg={2} sm={8}>
            <TextField
              label="Enter a number"
              variant="filled"
              className={styles.calculatorInput}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item lg={2} sm={3}>
            <FormControl sx={{ maxWidth: 170 }} fullWidth>
              <InputLabel>Precision?</InputLabel>
              <Select
                placeholder="Precision?"
                className={styles.InputLabel}
                onChange={handlePrecisionChange}
                value={precisionValue}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "white" }}>
                *Displays full number unless specified
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#16A8BE" }}
              onClick={() =>
                calculateSquareRoot(Number(inputValue), precisionValue)
              }
            >
              Calculate
            </Button>
            <Typography className={styles.helperText}>{result}</Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RootCalculator;
