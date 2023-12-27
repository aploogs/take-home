import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Container,
  Box,
} from "@mui/material";
import React from "react";

//? for this appbar, I think the most clever thing to do is to link to the different sections on the page via the items listed
const sections = ["root-calculator", "stock-ticker", "bonus-fun"];

const NavBar: React.FC = () => {
  //okay, so I want to do a few things here. I want to:
  //! add a logo
  //! add some more routes, I guess I'll just add more routes and make them basic
  //! add buttons and such
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <Box>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuOutlined />
            </IconButton>
            {sections.map((section) => (
              <Button sx={{ color: "black" }} key={section}>
                {section}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
