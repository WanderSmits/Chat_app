import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/sidebarOption.css";
import db from "../firebase";

function SidebarChannel({ Icon, title, id, addChannelOption }) {
  // when you click on icon, push next page into history, force redirect
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/channel/${id}`);
    } else {
      history.push(`title`);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("channels").add({ name: channelName });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{title}</h4> : <h4># {title}</h4>}
    </div>
  );
}

export default SidebarChannel;
