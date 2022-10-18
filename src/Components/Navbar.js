import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import linkdot from "../images/linkdot.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-style">
        <img src={logo} alt="logo"></img>
      </div>
      <nav className="navlinks">
        <Link to="/" className="link">
          <img src={linkdot} alt="linkdot"></img>
          Home
        </Link>
        <Link to="/about" className="link">
          <img src={linkdot} alt="linkdot"></img>
          About
        </Link>
        <Link to="/project" className="link">
          <img src={linkdot} alt="linkdot"></img>
          Projects
        </Link>
        <Link to="/contact" className="link">
          <img src={linkdot} alt="linkdot"></img>
          Contact Me
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
