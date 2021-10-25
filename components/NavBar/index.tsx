import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

import Search from "../Search";

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <Link href="/">
            <HomeIcon />
          </Link>
        </IconButton>
        <Search />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
