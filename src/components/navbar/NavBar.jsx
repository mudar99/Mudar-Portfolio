import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <li className="item">Mudar AF</li>
      </div>
      <ul className="items">
        <Link to="home">
          <li className="item">Home</li>
        </Link>
        <Link to="about">
          <li className="item">About</li>
        </Link>
        <Link to="education">
          <li className="item">Education</li>
        </Link>
        <li className="item">Services</li>
        <li className="item">Skills</li>
        <li className="item">Projects</li>
        <li className="item">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
