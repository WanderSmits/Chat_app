import React, { useState, useEffect } from "react";
import SidebarChannel from "./SidebarChannel";
import "../styles/sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InsertCommentIcon from "@material-ui/icons/InsertCommentRounded";
import db from "../firebase";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //snapshot fires off everytime something in the channels changes
    //docs is what is giving it back in the form of an object
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
      )
    );
  }, []);

  return (
    <div className="sidebar_div">
      <div className="channels">
        <h3>Add Channel</h3>
        <AddIcon />
        <div className="icon_side">
          {channels.map((channel) => (
            <SidebarChannel title={channel.name} id={channel.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
