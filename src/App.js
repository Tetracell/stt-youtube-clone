import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Nav />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </header>
    </div>
  );
};

export default App;
