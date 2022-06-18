import React from "react";
import YouTube from "react-youtube";
import './video.css';

//Display a sample video in place to make sure functionality works
const Video = () => {
  const options = {
    height: "390",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autplay: 1,
    },
  };

  const onReady = () => {
  };

  return (
    <div>
      <p>I will be the singular video that you click on!</p>
      <YouTube videoId="2g811Eo7K8U" opts={options} onReady={onReady} />
    </div>
  );
};

export default Video;
