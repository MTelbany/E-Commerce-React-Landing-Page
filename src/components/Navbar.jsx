import { Link } from "react-router-dom";
import './navbar.css'

export function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </>
  );
}
