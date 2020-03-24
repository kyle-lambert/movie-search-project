import React, { Component } from "react";
import Card from "./Card";
import "../css/MovieSection.css";
import { v4 as uuidv4 } from "uuid";
import { formatString, buildMovieState } from "../utilities";
const API_KEY = process.env.REACT_APP_API_KEY;

class MoviesSection extends Component {
  static defaultProps = {
    filterNames: ["upcoming", "popular", "now_playing", "top_rated"]
  };

  constructor(props) {
    super(props);
    this.state = {
      upcoming: [],
      now_playing: [],
      popular: [],
      top_rated: [],
      currentFilter: this.props.filterNames[0]
    };
  }

  timeoutFilter = () => {
    let index = this.props.filterNames.indexOf(this.state.currentFilter);
    this.setState({
      currentFilter: this.props.filterNames[
        index === this.props.filterNames.length - 1 ? 0 : index + 1
      ]
    });
  };

  changeFilter = e => {
    const type = e.target.name;
    this.setState({ currentFilter: type });
  };

  componentDidMount() {
    this.props.filterNames.map(name => this.getMovies(name));
    // setInterval(() => {
    //   this.timeoutFilter();
    // }, 10000);
  }

  async getMovies(type) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      if (data) {
        this.setState(state => ({
          ...state,
          [type]: buildMovieState(data)
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { currentFilter } = this.state;
    const movies = this.state[currentFilter].map((movie, i) => (
      <Card key={uuidv4()} movie={movie} index={i} />
    ));
    const buttons = this.props.filterNames.map(name => (
      <button
        key={name}
        name={name}
        className={`MovieSection-button ${
          currentFilter === name ? "active" : ""
        }`}
        disabled={currentFilter === name}
        onClick={this.changeFilter}>
        {formatString(name)}
      </button>
    ));

    return (
      <section className="MovieSection">
        <div className="MovieSection-container">
          <h2 className="MovieSection-header">Movies</h2>
          <div className="MovieSection-btn-container">{buttons}</div>
        </div>
        <div className="MovieSection-grid">{movies}</div>
      </section>
    );
  }
}

export default MoviesSection;
