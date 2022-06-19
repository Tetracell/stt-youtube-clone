import React from "react";
import { Link } from "react-router-dom";
import "./VideoList.css";

const VideoList = ({ results }) => {
  if (!results) {
    return <p> Error: 404 </p>;
  } else {
    return results.map((item) => {
      return (
        <div key={item.id.videoId} className="video">
          <section>
            <Link to={`video/${item.id.videoId}`}>
              <img src={item.snippet.thumbnails.medium.url} alt="" />
            </Link>
            <p>
              {item.snippet.title}
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
