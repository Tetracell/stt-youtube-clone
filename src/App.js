import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";


// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Video from "./components/Video";

const App = () => {
  const [linkId, setLinkId] = useState("");
  const handleClick= (e) => {
    setLinkId()
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/video/:id" element={<Video />} />
          </Routes>
        </div>
      </header>
    </div>
  );
};

export default App;
