import { Link } from "react-router-dom";

const VideoList = ({ results }) => {
  if (!results) {
    return <p> Error: 404 </p>;
  } else {
    return results.map((item) => {
      return (
        <div id={item.id.videoId} className="videoSnippet">
          <Link to="video/:id" />
          <img src={item.snippet.thumbnails.default.url}/>
          <p>{item.snippet.title}</p>
          <p>{item.snippet.channelTitle}</p>
        </div>
      );
    });
  }
};

export default VideoList;
