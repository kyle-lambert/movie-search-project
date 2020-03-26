import React, { Component } from "react";
import Navbar from "../Navbar";
import Showcase from "../Showcase";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <Showcase name="tv_shows" media="tv" time="week" />
        <Showcase name="movies" media="movies" time="week" />
      </div>
    );
  }
}

export default Home;
