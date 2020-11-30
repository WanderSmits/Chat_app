import React, { useState } from "react";
import db from "../firebase";
import "../styles/ChatInput.css";
import { useStateValue } from "../StateProvider";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("channels").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="chat_input">
      {channelName ? (
        <form>
          <div className="text-field">
            {" "}
            <TextField
              fullWidth
              variant="filled"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Message ${channelName}`}
            />
          </div>

          <div className="chat_button">
            <Button
              type="submit"
              onClick={sendMessage}
              variant="contained"
              color="primary"
              size="small"
              endIcon={<SendIcon>send</SendIcon>}
            >
              Send
            </Button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default ChatInput;
