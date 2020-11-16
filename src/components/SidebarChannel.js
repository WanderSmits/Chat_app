import React from "react";
import "../styles/sidebarOption.css";

function SidebarChannel({ Icon, title }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{title}</h4> : <h4># {title}</h4>}
    </div>
  );
}

export default SidebarChannel;
