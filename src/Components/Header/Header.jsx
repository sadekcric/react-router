import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
      </ul>
    </div>
  );
};

export default Header;
