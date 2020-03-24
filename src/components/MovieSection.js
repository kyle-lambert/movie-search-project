import React, { Component } from "react";
import Card from "./Card";
import "../css/MovieSection.css";

class MoviesSection extends Component {
  render() {
    const {
      upcoming,
      now_playing,
      popular,
      top_rated,
      currentFilter
    } = this.props.movies;

    const filterMovies = () => {
      const currentFilter = this.props.movies.currentFilter;
      if (currentFilter === "upcoming") {
        return upcoming.map(m => <Card key={m.id} movie={m} />);
      } else if (currentFilter === "now_playing") {
        return now_playing.map(m => <Card key={m.id} movie={m} />);
      } else if (currentFilter === "popular") {
        return popular.map(m => <Card key={m.id} movie={m} />);
      } else if (currentFilter === "top_rated") {
        return top_rated.map(m => <Card key={m.id} movie={m} />);
      } else {
        console.error("Problem with filtering movie type");
        return [];
      }

      // let cards;
      // switch (currentFilter) {
      //   case "upcoming":
      //     cards = upcoming.map(m => <Card key={m.id} movie={m} />);
      //     break;
      //   case "now_playing":
      //     cards = now_playing.map(m => <Card key={m.id} movie={m} />);
      //     break;
      //   case "popular":
      //     cards = popular.map(m => <Card key={m.id} movie={m} />);
      //     break;
      //   case "top_rated":
      //     cards = top_rated.map(m => <Card key={m.id} movie={m} />);
      //     break;
      //   default:
      //     cards = upcoming.map(m => <Card key={m.id} movie={m} />);
      //     break;
      // }
      // return cards;
    };

    const buttons = this.props.filterTypes.map(type => (
      <button
        key={type}
        name={type}
        className={`MovieSection-button ${
          currentFilter === type ? "active" : ""
        }`}
        disabled={currentFilter === type}
        onClick={this.props.filterMovies}>
        {type.replace("_", " ")}
      </button>
    ));

    return (
      <section className="MovieSection">
        <div className="MovieSection-container">
          <h2 className="MovieSection-header">Movies</h2>
          <div className="MovieSection-btn-container">{buttons}</div>
        </div>
        <div className="MovieSection-grid">{filterMovies()}</div>
      </section>
    );
  }
}

export default MoviesSection;
