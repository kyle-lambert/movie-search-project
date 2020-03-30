import React, { Component } from "react";
import Showcase from "../Showcase";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Showcase name="tv_shows" media="tv" time="week" />
        {/* <Showcase name="movies" media="movies" time="week" /> */}
      </div>
    );
  }
}

export default Home;
