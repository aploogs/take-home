"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Home from "../../components/home";
import HomeLayout from "./layout";

const HomePage: React.FC = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <HomeLayout>
          <Home />
        </HomeLayout>
      </LocalizationProvider>
    </>
  );
};

export default HomePage;
