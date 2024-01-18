"use client";
import React from "react";
import { Grid } from "@mui/material";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Grid pt={1} container maxWidth={1900}>
        {children}
      </Grid>
    </section>
  );
}
