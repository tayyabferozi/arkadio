import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isSideNavActive, setisSideNavActive] = useState(false);

  const toggleSideNav = () => {
    setisSideNavActive((prevState) => !prevState);
  };

  return (
    <div id="navbar">
      <div className="container-fluid">
        <div className="logo">
          <img src="./assets/vector/logo.svg" alt="logo" />
        </div>
        <div
          onClick={toggleSideNav}
          id="hamburger"
          className="d-block d-md-none"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav${isSideNavActive ? " active" : ""}`}>
          <div id="close" onClick={toggleSideNav}>
            &times;
          </div>
          <li className="nav-item">
            <Link to="#about" offset={-100}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="#portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <a className="btn-header" href="mailto:#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
