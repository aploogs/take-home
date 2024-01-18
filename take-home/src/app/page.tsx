"use client";
import React from "react";
import Home from "../components/home";
import Layout from "./layout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Layout>
        <Home />
      </Layout>
    </LocalizationProvider>
  );
}

export default App;
