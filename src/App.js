import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Video from "./components/Video";
import { Error } from "./components/Error";



const App = () => {
  const [isOpen, setIsOpen]=useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/video/:id" element={<Video />} />
            <Route path="*" element={<Error setIsOpen={setIsOpen}/>} />
          </Routes>
        </div>
      </header>
    </div>
  );
};

export default App;
