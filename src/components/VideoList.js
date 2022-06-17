import { Link } from "react-router-dom";
import "./VideoList.css"

const VideoList = ({ results }) => {
  if (!results) {
    return <p> Error: 404 </p>;
  } else {
    return results.map((item) => {
      return (
        <div key={item.id.videoId} className="video">
            <Link to="video/:id" />
            <img src={item.snippet.thumbnails.medium.url} /> 
            <p>{item.snippet.title}</p>
            <p>{item.snippet.channelTitle} <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/YT_Official_Verified_Checkmark_Circle.svg/1024px-YT_Official_Verified_Checkmark_Circle.svg.png' id='verified'/></p>
        </div>
      );
    });
  }
};

export default VideoList;
