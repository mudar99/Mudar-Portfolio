import React from "react";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <li className="item">Mudar AF</li>
      </div>
      <ul className="items">
        <li className="item">Home</li>
        <li className="item">About</li>
        <li className="item">Education</li>
        <li className="item">Services</li>
        <li className="item">Skills</li>
        <li className="item">Projects</li>
        <li className="item">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
