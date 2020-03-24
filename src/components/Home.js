import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieSection from "./MovieSection";
import Slider from "./Slider";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <Slider />
        <MovieSection />
      </div>
    );
  }
}

export default Home;
