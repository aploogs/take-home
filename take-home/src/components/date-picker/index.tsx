import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

type DatePickerProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  return (
    <DatePicker
      views={["year", "month", "day"]}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomDatePicker;
