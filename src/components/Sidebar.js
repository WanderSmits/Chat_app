import React, { useState } from "react";
import SidebarChannel from "./SidebarChannel";
import "../styles/sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import AddChannel from "./AddChannel";
import useChannels from "../hooks/useChannels";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const channels = useChannels();

  const deleteChannel = (id) => {
    db.collection("channels").doc(id).delete();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addChannel = (input) => {
    const channelName = input;

    //capitalize ChannelNames
    const capitalizedChannel =
      channelName.charAt(0).toLocaleUpperCase() + channelName.slice(1);
    if (channelName) {
      db.collection("channels").add({ name: capitalizedChannel });
    }
    setOpen(false);
  };

  return (
    <div className="sidebar_div">
      <Link to="/">
        <div className="sidebar_home">
          <img
            src="https://logopond.com/logos/2a7cadb22d9bd64074a9be897877a26e.png"
            width="200vh"
            alt=""
          />
        </div>
      </Link>
      <div className="channels">
        <h3>Add Channel</h3>
        <div className="add_channel">
          <AddIcon onClick={handleClickOpen} />
          {open ? (
            <AddChannel
              className="channel_message"
              handleClose={handleClose}
              addChannel={addChannel}
              open={open}
            />
          ) : null}
        </div>
        <>
          {channels.map((channel) => (
            <div className="icon_side" key={channel.id}>
              <SidebarChannel title={channel.name} id={channel.id} />
              <div className="deleteChannel">
                <DeleteIcon onClick={() => deleteChannel(channel.id)} />
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default Sidebar;
