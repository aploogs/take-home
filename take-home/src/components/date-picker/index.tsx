import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

type DatePickerProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      value={selectedDate}
      onChange={handleDateChange}
      // renderInput={(params) => <input {...params} />}
    />
  );
};

export default CustomDatePicker;
