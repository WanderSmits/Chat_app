import React from "react";
import { Avatar } from "@material-ui/core";
import "../styles/header.css";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header_div">
      <div className="header_right">
        <Avatar alt={user?.displayName} src={user?.photoURL} />
      </div>
    </div>
  );
}

export default Header;
