import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/sidebarOption.css";
import AddIcon from "@material-ui/icons/Add";
import ChatIcon from "@material-ui/icons/Chat";

function SidebarChannel({ Icon, title, id }) {
  // when you click on icon, push next page into history, force redirect
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/channel/${id}`);
    } else {
      history.push(`title`);
    }
  };

  return (
    <div className="sidebarOption" onClick={selectChannel}>
      {Icon && <AddIcon className="sidebarOption_icon" />}
      <h4>
        <ChatIcon /> {title}
      </h4>
    </div>
  );
}

export default SidebarChannel;
