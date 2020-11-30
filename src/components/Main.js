import React from "react";
import useChannels from "../hooks/useChannels";
import "../styles/main.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

function Main() {
  const channels = useChannels();
  const history = useHistory();

  const selectChannel = (id) => {
    history.push(`/channel/${id}`);
  };

  return (
    <div>
      {channels.map((channel) => {
        return (
          <Card
            key={channel.id}
            className="cards"
            onClick={() => selectChannel(channel.id)}
          >
            <CardActionArea>
              <CardMedia
                className="media"
                image="https://logopond.com/logos/2a7cadb22d9bd64074a9be897877a26e.png"
                title="Card Image"
              />
              <CardContent>
                {" "}
                <Typography gutterBottom variant="h5" component="h2">
                  {channel.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

export default Main;
