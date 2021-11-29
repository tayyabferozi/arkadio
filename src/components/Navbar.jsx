import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isSideNavActive, setisSideNavActive] = useState(false);

  const toggleSideNav = () => {
    setisSideNavActive((prevState) => !prevState);
  };

  const hideSideNav = () => {
    setisSideNavActive(false);
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
            <Link smooth onClick={hideSideNav} to="about" offset={-100}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth onClick={hideSideNav} to="services" offset={-100}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth onClick={hideSideNav} to="portfolio" offset={-100}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <a onClick={hideSideNav} className="btn-header" href="mailto:#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
