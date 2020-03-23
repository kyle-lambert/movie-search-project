import React, { Component } from "react";
import Card from "./Card";
import "../css/MovieSection.css";

class MoviesBox extends Component {
  render() {
    const getClassName = name => {
      return name === this.props.type
        ? "MovieSection-button active"
        : "MovieSection-button";
    };
    return (
      <section className="MovieSection">
        <div className="MovieSection-container">
          <h2 className="MovieSection-header">Movies</h2>
          <div className="MovieSection-btn-container">
            <button
              name="upcoming"
              className={getClassName("upcoming")}
              onClick={this.props.changeType}>
              Upcoming
            </button>
            <button
              name="now_playing"
              className={getClassName("now_playing")}
              onClick={this.props.changeType}>
              Now Playing
            </button>
            <button
              name="popular"
              className={getClassName("popular")}
              onClick={this.props.changeType}>
              Popular
            </button>
            <button
              name="top_rated"
              className={getClassName("top_rated")}
              onClick={this.props.changeType}>
              Top Rated
            </button>
          </div>
        </div>
        <div className="MovieSection-grid">
          {this.props.movies.map(m => (
            <Card key={m.id} movie={m} />
          ))}
        </div>
      </section>
    );
  }
}

export default MoviesBox;
