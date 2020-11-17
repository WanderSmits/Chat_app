import React, { useState, useEffect } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Chat() {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [messages, setMessages] = useState([]);

  //uses the params of the channelId to fetch details from the db
  useEffect(() => {
    console.log(channelId);
    if (channelId) {
      //   //when you click channel you will send id over
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => setChannelDetails(snapshot.data()));
    }
    db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [channelId]);

  return (
    <div className="chat">
      {/* es7 has ? is optional chaining, instant try catch  */}
      <div className="chat__header">
        <h1>{channelDetails?.name}</h1>
      </div>
      <div className="chat_messages">
        {messages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={channelDetails?.name} channelId={channelId} />
    </div>
  );
}

export default Chat;
