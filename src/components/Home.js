import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieSection from "./MovieSection";
const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <MovieSection />
      </div>
    );
  }
}

export default Home;
