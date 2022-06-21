import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

const Nav = () => {
  const home = require("../images/home.png");

  return (
    <div className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
        id="ytlogo"
      />
      <ul id="nav-list">
        <li id="homelink">
          <Link to={"/"}>
            <img src={home} id="homelogo" />
            Home
          </Link>
        </li>
        <li id="aboutlink">
          <Link to={"/about"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Red_information_icon_with_gradient_background.svg/1024px-Red_information_icon_with_gradient_background.svg.png"
              id="abouticon"
            />
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
