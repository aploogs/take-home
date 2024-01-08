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
import styles from "./nav-bar.module.scss";

const NavBar: React.FC = () => {
  //okay, so I want to do a few things here. I want to:
  //! add some routes that go to the spot on the page, although I don't see this getting too big
  //! add buttons and such
  return (
    <AppBar>
      <Toolbar className={styles.toolbar}>
        <Grid item lg={1}>
          <Icon component={SsidChartIcon} />
        </Grid>
        <Grid item lg={2}>
          <Typography>Trading Block Take-home</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
