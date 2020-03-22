import React, { Component } from "react";
import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <h2 className="Navbar-brand">Box Office Database</h2>
        <nav className="Navbar-nav">
          <ul className="Navbar-list">
            <li className="Navbar-item">Home</li>
            <li className="Navbar-item">Movies</li>
            <li className="Navbar-item">TV Shows</li>
            <li className="Navbar-item">Actors</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
