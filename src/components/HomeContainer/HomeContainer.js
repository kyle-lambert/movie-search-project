import React, { Component } from "react";
import Home from "../Home/Home";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_filter: "movie",
      movie: {
        popular: {
          data: [],
          loading: true,
          error: "",
        },
        now_playing: {
          data: [],
          loading: true,
          error: "",
        },
        top_rated: {
          data: [],
          loading: true,
          error: "",
        },
      },
      tv: {
        popular: {
          data: [],
          loading: true,
          error: "",
        },
        top_rated: {
          data: [],
          loading: true,
          error: "",
        },
      },
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchData(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        "popular",
        "movie"
      );
      this.fetchData(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
        "now_playing",
        "movie"
      );
      this.fetchData(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
        "top_rated",
        "movie"
      );
      this.fetchData(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
        "popular",
        "tv"
      );
      this.fetchData(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
        "top_rated",
        "tv"
      );
    }, 1500);
  }

  toggleFilter = (media_type) => {
    this.setState((state) => ({
      ...state,
      current_filter: media_type,
    }));
  };

  fetchData(url, endpoint, media_type) {
    axios
      .get(url)
      .then((data) => {
        this.setState((state) => ({
          ...state,
          [media_type]: {
            ...state[media_type],
            [endpoint]: {
              data: data.data.results,
              loading: false,
              error: "",
            },
          },
        }));
      })
      .catch((error) => {
        this.setState((state) => ({
          ...state,
          [media_type]: {
            ...state[media_type],
            [endpoint]: {
              data: [],
              error: error,
              loading: false,
            },
          },
        }));
      });
  }

  render() {
    const { movie, tv, current_filter } = this.state;
    return (
      <Home
        movie={movie}
        tv={tv}
        current_filter={current_filter}
        toggleFilter={this.toggleFilter}
      />
    );
  }
}

export default HomeContainer;
