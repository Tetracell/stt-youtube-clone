import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <p> I am the Nav Bar! The below links are a part of me.</p>
      <ul>
        <li id="homelink">
          <Link to={"/"}> Home </Link>
        </li>
        <li id="aboutlink">
          <Link to={"/about"}> About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
