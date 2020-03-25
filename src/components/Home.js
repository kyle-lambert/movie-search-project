import React, { Component } from "react";
import Navbar from "./Navbar";
import ShowcaseMovie from "./ShowcaseMovie";
import Carousel from "./Carousel";

class Home extends Component {
  static defaultProps = {
    data: [1, 2, 3, 4, 5]
  };
  render() {
    return (
      <div className="Home">
        <Navbar />
        {/* <Carousel /> */}
        <ShowcaseMovie />
      </div>
    );
  }
}

export default Home;
