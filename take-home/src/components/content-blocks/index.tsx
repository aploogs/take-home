import React from "react";
import { Button, Box, Grid, Typography } from "@mui/material";

type ContentBlockProps = {
  headerText?: string;
  text?: string;
  onClick?: () => void;
};

const ContentBlock: React.FC<ContentBlockProps> = ({
  headerText,
  text,
  onClick,
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          {headerText}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{text}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={onClick}>Click me for stonks</Button>
      </Grid>
    </Grid>
  );
};

export default ContentBlock;
