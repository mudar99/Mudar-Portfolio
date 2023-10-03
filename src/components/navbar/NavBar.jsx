import React, { useContext, useEffect, useState } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";

const NavBar = () => {
  const location = useLocation();
  const { toggle, mode } = useContext(ThemeContext);
  const [place, setPlace] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const place = location.pathname.slice(1);
    localStorage.setItem("tab", place);
    setPlace(place);
  }, [location]);

  return (
    <nav className="navbar animate__animated animate__slideInDown">
      <div className="brand">
        <li className="item">Mudar AF</li>
        <i
          className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        ></i>
      </div>
      {/* <div className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
      </div> */}
      <ul
        className={`items animate__animated ${
          isMenuOpen ? "animate__bounceInDown open" : "  closed"
        }`}
      >
        <li className="item" onClick={toggle}>
          <i className="fa">{mode === "light" ? "🌙" : "🔆"}</i>
        </li>
        <Link to="home" onClick={() => setPlace("home")}>
          <li className={`item ${place === "home" ? "visited" : ""}`}>Home</li>
        </Link>
        <Link to="about" onClick={() => setPlace("about")}>
          <li className={`item ${place === "about" ? "visited" : ""}`}>
            About
          </li>
        </Link>
        <Link to="education" onClick={() => setPlace("education")}>
          <li className={`item ${place === "education" ? "visited" : ""}`}>
            Education
          </li>
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
