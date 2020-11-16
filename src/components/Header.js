import React from "react";
import { Avatar } from "@material-ui/core";
import "../styles/header.css";

function Header() {
  return (
    <div className="header_div">
      <div className="header_right">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Header;
