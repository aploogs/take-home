import React from "react";
import { ListItem, ListItemText, Button, Grid } from "@mui/material";

type NavItemProps = {
  text: string;
  //also I feel like this location prop is necessary but like...maybe it isn't?
  location?: string;
  //this hover won't work until I add a mouse event listener function
  hover?: boolean;
  onClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  text,
  hover,
  location,
  onClick,
}) => {
  return (
    <ListItem>
      <Button style={{ color: hover ? "gray" : "black" }} onClick={onClick}>
        <ListItemText
          style={{ color: hover ? "white" : "black" }}
          primary={text}
        />
      </Button>
    </ListItem>
  );
};

export default NavItem;
