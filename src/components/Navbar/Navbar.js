import React from "react";
import { Link } from "react-router-dom";

import brandLogo from "../../images/brand-logo.svg";
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
      </div>
    </div>
  );
}

export default Navbar;
