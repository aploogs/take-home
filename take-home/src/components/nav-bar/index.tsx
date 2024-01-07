import SsidChartIcon from "@mui/icons-material/SsidChart";
import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import React from "react";
import NavItem from "./nav-item";

//? for this appbar, I think the most clever thing to do is to link to the different sections on the page via the items listed
const sections = ["root-calculator", "stock-ticker"];

const NavBar: React.FC = () => {
  //okay, so I want to do a few things here. I want to:
  //! add some routes that go to the spot on the page, although I don't see this getting too big
  //! add buttons and such
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <Grid item lg={1}>
            <Icon component={SsidChartIcon} />
          </Grid>
          <Grid item lg={2}>
            <Typography>Stocks exercise</Typography>
          </Grid>
          {sections.map((section, idx) => (
            <Grid key={idx} item lg={4}>
              <NavItem text={section} key={idx} />
            </Grid>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
