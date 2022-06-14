import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import VideoList from "./components/VideoList";
import Video from "./components/Video";
import About from "./components/About";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Nav />
          <Routes>
            <Route exact path = 
          </Routes>
        </div>
      </header>
    </div>
  );
};

export default App;
