import React from "react";
import "../styles/Message.css";

function Message({ message, timestamp, user, userImage, id }) {
  console.log(userImage);
  return (
    <div className="message">
      <img src={userImage} alt="" key={id} />
      <div className="message_info">
        <h4>
          {user}
          <span className="message_time">
            {new Date(timestamp?.toDate().getTime()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
