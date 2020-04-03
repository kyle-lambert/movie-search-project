import React, { Component } from "react";
import CarouselContainer from "./CarouselContainer";
import "../css/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* <section className="Home-hero"></section> */}
        <section className="Home-movies">
          <h2 className="Home-title">Trending Movies</h2>
          <CarouselContainer type="movie" time="week" />
        </section>
        <hr className="Home-hr" />
        <section className="Home-tv">
          <h2 className="Home-title">Trending TV Shows</h2>
          <CarouselContainer type="tv" time="day" />
        </section>
        {/* <section className="Home-tv"></section> */}
      </div>
    );
  }
}

export default Home;
