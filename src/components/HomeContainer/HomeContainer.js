import React, { Component } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media_type: "movie",
      popular: {
        data: [],
        fetching: true,
        error: "",
      },
      now_playing: {
        data: [],
        fetching: true,
        error: "",
      },
      top_rated: {
        data: [],
        fetching: true,
        error: "",
      },
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchData(
        `https://api.themoviedb.org/3/trending/${this.state.media_type}/week?api_key=${API_KEY}`,
        "popular"
      );
      this.fetchData(
        `https://api.themoviedb.org/3/trending/${this.state.media_type}/week?api_key=${API_KEY}`,
        "now_playing"
      );
      this.fetchData(
        `https://api.themoviedb.org/3/trending/${this.state.media_type}/week?api_key=${API_KEY}`,
        "top_rated"
      );
    }, 1500);
  }

  fetchData(url, endpoint) {
    axios
      .get(url)
      .then((data) => {
        this.setState((state) => ({
          ...state,
          [endpoint]: {
            data: data.data.results,
            fetching: false,
            error: "",
          },
        }));
      })
      .catch((error) => {
        this.setState((state) => ({
          ...state,
          [endpoint]: {
            data: [],
            error: error,
            fetching: false,
          },
        }));
      });
  }

  render() {
    return (
      <Layout>
        <div>home container</div>
      </Layout>
    );
  }
}

export default HomeContainer;
