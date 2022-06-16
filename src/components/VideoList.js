const VideoList = ({ results }) => {
  if (!results) {
    return <p> Error </p>;
  } else {
    return results.map((item) => {
      return <div>{item.snippet.title}</div>;
    });
  }
};

export default VideoList;
