import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./VideoList.css";
import YouTube from "react-youtube";

const VideoList = ({ results }) => {
  const options = {
    height: "190",
    width: "400",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  if (!results) {
    return <p> Error: 404 </p>;
  } else {
    return results.map((item) => {
      return (
        <div key={item.id.videoId} className="video">
          <section>
            <YouTube videoId={item.id.videoId} opts={options} />
            <p>
              <Link to={`video/${item.id.videoId}`}>{item.snippet.title}</Link>
              <br />
              {item.snippet.channelTitle}{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/YT_Official_Verified_Checkmark_Circle.svg/1024px-YT_Official_Verified_Checkmark_Circle.svg.png"
                id="verified"
              />
            </p>
          </section>
        </div>
      );
    });
  }
};

export default VideoList;
