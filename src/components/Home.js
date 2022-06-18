import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import VideoList from "./VideoList";
import Video from "./Video";

const Home = () => {
  const [request, setRequest] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(`This is the search query : ${request}`);
    try {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${request}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          //debugger;
          console.log(data);
          setResults(data.items);
        });
    } catch (error) {
      console.log(error);
    }
    setRequest("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
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
      </form>
      <VideoList results={results} />
    </div>
  );
};

export default Home;
