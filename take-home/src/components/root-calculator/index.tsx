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

const RootCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [precisionValue, setPrecisionValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
        <Grid container spacing={2} flexDirection="row">
          <Grid item lg={2}>
            <TextField
              label="Enter a number"
              value={inputValue}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item lg={2}>
            <FormControl sx={{ maxWidth: 120 }} fullWidth>
              <InputLabel>Precision?</InputLabel>
              <Select
                label="Precision?"
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
              <FormHelperText>
                *Displays full number unless specified
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                calculateSquareRoot(Number(inputValue), precisionValue)
              }
            >
              Calculate
            </Button>
            <Typography>{result}</Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RootCalculator;
