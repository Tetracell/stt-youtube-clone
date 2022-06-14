import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <p> I am the Nav Bar!</p>
      <Link to={"/"}> Home </Link>
      <Link to={"/about"}> About</Link>
    </div>
  );
};

export default Nav;
