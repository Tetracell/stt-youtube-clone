import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import "./Video.css";
import Comments from "./Comments";

//Display a sample video in place to make sure functionality works
const Video = () => {
  let videoId = useParams();
  // console.log(videoId);
  const options = {
    height: "390",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autplay: 1,
    },
  };

  return (
    <div>
      <section className='video-show'>
      <YouTube videoId={videoId.id} opts={options}/>
      </section>
      <Comments />
    </div>
  );
};

export default Video;
