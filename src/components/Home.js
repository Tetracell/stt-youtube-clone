import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import VideoList from "./VideoList";
import Video from "./Video";
import "./Home.css";

const Home = () => {
  const [request, setRequest] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${request}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
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
          <br />
          <input
            type="text"
            placeholder="Search..."
            id="search-bar"
            name="search"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          ></input>
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      <div className="videolist">
      <VideoList results={results} />
      </div>
    </div>
  );
};

export default Home;
