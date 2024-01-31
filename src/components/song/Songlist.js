import React from "react";
import { useDispatch } from "react-redux";
import songsData from "../../data/songData";
import clicked_song from "../../Redux/Actions/songAction";

const Songlist = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {songsData.map((song) => (
        <h1 className="song" onClick={() => dispatch(clicked_song(song))}>
          {song.name}
        </h1>
      ))}
    </div>
  );
};
export default Songlist;
