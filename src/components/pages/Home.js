import React, { Component } from "react";
import Navbar from "../Navbar";
import Showcase from "../Showcase";
import { buildMovieState } from "../../utilities";
import { v4 as uuidv4 } from "uuid";
const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends Component {
  static defaultProps = {
    types: ["upcoming", "popular", "now_playing", "top_rated"]
  };
  constructor(props) {
    super(props);
    this.state = {
      trending: {
        movies: [],
        tv: [],
        actors: [],
        isLoadingMovies: true,
        isLoadingTV: true,
        isLoadingActors: true
      }
    };
  }

  componentDidMount() {
    this.fetchTrendingMovies();
    this.fetchTrendingTV();
    this.fetchTrendingActors();
  }

  async fetchTrendingMovies() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      const data = await res.json();
      if (data)
        this.setState(state => ({
          trending: {
            ...state.trending,
            movies: data.results,
            isLoadingMovies: false
          }
        }));
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTrendingTV() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
      );
      const data = await res.json();
      if (data)
        this.setState(state => ({
          trending: {
            ...state.trending,
            tv: data.results,
            isLoadingTV: false
          }
        }));
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTrendingActors() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${API_KEY}`
      );
      const data = await res.json();
      if (data)
        this.setState(state => ({
          trending: {
            ...state.trending,
            actors: data.results,
            isLoadingActors: false
          }
        }));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      movies,
      tv,
      actors,
      isLoadingMovies,
      isLoadingActors,
      isLoadingTV
    } = this.state.trending;
    return (
      <div className="Home">
        <Navbar />
        <Showcase name="movies" isLoading={isLoadingMovies} content={movies} />
        <Showcase name="tv_shows" isLoading={isLoadingTV} content={tv} />
      </div>
    );
  }
}

export default Home;
