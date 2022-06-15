import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { search } from "../fetch.js"

import VideoList from "./VideoList";
import Video from "./Video";
import Nav from "./Nav";

const Home = () => {
  const [request, setRequest] = useState("");
  let results;
  const handleSubmit = (query) => {
    console.log(`This is the search query : ${query}`)
    setRequest("");
    try {
        results = search(query);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <form>
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
        <button type="button" onClick={(() => handleSubmit(request))} >Search</button>
        <VideoList/>
      </form>
    </div>
  );
};

// The line 28 onclick is wrapped in an anonymous function to prevent the page from reloading after every update.
export default Home;
