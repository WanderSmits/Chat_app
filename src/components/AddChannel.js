import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../styles/sidebar.css";

function AddChannel(props) {
  const [input, setInput] = useState("");

  function closeChannel() {
    props.handleClose();
  }

  function acceptChannel() {
    props.addChannel(input);
  }

  return (
    <div className="channel_message">
      <Dialog
        open={props.open}
        onClose={closeChannel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Channel</DialogTitle>
        <DialogContent>
          <TextField
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Add Channel"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeChannel} color="primary">
            Cancel
          </Button>
          <Button onClick={acceptChannel} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddChannel;
