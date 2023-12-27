import React from "react";
import { ListItem, ListItemText } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   listItem: {
//     '&:hover': {
//       // Customize hover state styles here
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.common.white,
//     },
//   },
// }));

type NavItemProps = {
  text: string;
  hover?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ text, hover }) => {
  return (
    <ListItem>
      <ListItemText color={hover ? "primary" : "secondary"} primary={text} />
    </ListItem>
  );
};

export default NavItem;
