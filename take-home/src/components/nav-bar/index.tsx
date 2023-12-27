import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Container,
  Box,
  Grid,
} from "@mui/material";
import React from "react";
import NavItem from "./nav-item";

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
          <Grid container direction="row">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuOutlined />
            </IconButton>
            {sections.map((section, idx) => (
              <Grid item lg={3}>
                <NavItem text={section} key={idx} />
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
