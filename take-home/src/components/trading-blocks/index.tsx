import React from "react";
import { Container, Typography } from "@mui/material";

const TradingBlock: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Welcome to the Content Container!
      </Typography>
      <Typography variant="body1">
        This is a basic content container using Material-UI components.
      </Typography>
    </Container>
  );
};

export default TradingBlock;
