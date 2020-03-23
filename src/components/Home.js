import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieSection from "./MovieSection";
import Carousel from "./Carousel";
const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      tv: [],
      movie: [],
      type: "upcoming"
    };
    this.changeType = this.changeType.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getTrending = this.getTrending.bind(this);
  }

  async componentDidMount() {
    this.getMovies(this.state.type);
    this.getTrending("tv");
    this.getTrending("movie");
  }

  async getTrending(type) {
    const url = `https://api.themoviedb.org/3/trending/${type}/week?api_key=${API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        this.setState({ [type]: data.results });
      } else {
        console.log("Problem with movie request");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getMovies(type) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      if (data) {
        this.setState({ movies: data.results });
      } else {
        console.log("Problem with movie request");
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeType(e) {
    const type = e.target.name;
    this.getMovies(type);
    this.setState({ type: type });
  }

  render() {
    return (
      <div className="Home">
        <Navbar />
        {this.state.movie.length > 0 ? (
          <Carousel content={this.state.movie} />
        ) : null}
        <MovieSection
          movies={this.state.movies}
          changeType={this.changeType}
          type={this.state.type}
        />
      </div>
    );
  }
}

export default Home;
