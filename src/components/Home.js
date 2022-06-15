import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { search } from "../fetch.js"


import VideoList from "./VideoList";
import Video from "./Video";
import Nav from "./Nav";

const Home = () => {
  const [request, setRequest] = useState("");
  //console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
  console.log(process.env.YOUTUBE_API_KEY);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`This is the search query : ${request}`)
    setRequest("");
    try {
        console.log(search(request));
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          What would you like to see today?
          <br />
          <input
            type="text"
            placeholder="search here"
            id="search-bar"
            name="search"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          ></input>
        </label>
        <button type="submit">Search</button>
        <VideoList/>
      </form>
    </div>
  );
};
export default Home;
