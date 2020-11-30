import { useState, useEffect } from "react";
import db from "../firebase";

function useChannels() {
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

  return channels;
}

export default useChannels;
