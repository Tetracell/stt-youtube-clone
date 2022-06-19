import React from "react";
import VideoList from "./VideoList";
import { Error } from "./Error";
import { useState } from "react";


import "./Home.css";

const Home = () => {
  const [request, setRequest] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!request) {
        throw "Please enter a search request!";
      }
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
      setShow(true);
      setErr(error);

    }
    setRequest("");
  };

  return (
    <div>
      {/* <button onClick={() => setShow(true)}>Show modal</button> */}
      <Error onClose={() => setShow(false)} show={show} error={err}/>
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
        <button type="submit" id='search-button'>Search</button>
      </form>
      <div className="videolist">
        <VideoList results={results} />
      </div>
    </div>
  );
};

export default Home;
