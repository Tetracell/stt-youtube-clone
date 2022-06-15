import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
        <img
        classname="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
      />
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
