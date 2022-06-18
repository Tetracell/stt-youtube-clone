import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const VideoList = ({ results }) => {
  if (!results) {
    return <p> Error: 404 </p>;
  } else {
    return results.map((item) => {
      return (
        <div id={item.id.videoId} className="videoSnippet">
          <img src={item.snippet.thumbnails.default.url} />
          <Link to={`video/${item.id.videoId}`}>{item.snippet.title}</Link>
          <p>{item.snippet.channelTitle}</p>
        </div>
      );
    });
  }
};

export default VideoList;
