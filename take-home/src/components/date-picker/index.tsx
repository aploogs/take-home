import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Grid } from "@mui/material";

type DatePickerProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  return (
    <Grid item lg={12}>
      <DatePicker
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
        views={["year", "month", "day"]}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
};

export default CustomDatePicker;
