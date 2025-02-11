import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        borderBottom: "1px solid #d0cdcd",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "2rem", verticalAlign: "middle" }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
