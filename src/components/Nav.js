import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <p> I am the Nav Bar! The below links are a part of me.</p>
      <ul>
        <li>
          <Link to={"/"}> Home </Link>
        </li>
        <li>
          <Link to={"/about"}> About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
