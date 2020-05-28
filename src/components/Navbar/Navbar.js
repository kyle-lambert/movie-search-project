import React from "react";
import { Link } from "react-router-dom";

import brandLogo from "../../images/brand-logo-dark.svg";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="Navbar-inner">
        <div className="Navbar-logo">
          <Link to="/">
            <img src={brandLogo} alt="Brand logo" className="Navbar-img" />
          </Link>
        </div>
        <nav className="Navbar-nav">
          <Link className="Navbar-link" to="/">
            Home
          </Link>
          <Link className="Navbar-link" to="/search">
            Search
          </Link>
          <Link className="Navbar-link" to="/discover">
            Discover
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
