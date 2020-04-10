import React, { Component } from "react";
import Details from "../Details/Details";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        data: [],
        loading: true,
        error: "",
      },
      credits: {
        data: [],
        loading: true,
        error: "",
      },
      reviews: {
        data: [],
        loading: true,
        error: "",
      },
      recommendations: {
        data: [],
        loading: true,
        error: "",
      },
      similar: {
        data: [],
        loading: true,
        error: "",
      },
      movie_credits: {
        data: [],
        loading: true,
        error: "",
      },
      tv_credits: {
        data: [],
        loading: true,
        error: "",
      },
    };
  }

  componentDidMount() {
    const { content_id, media_type } = this.props.match.params;
    switch (media_type) {
      case "movie":
      case "tv":
        this.fetchData(
          `https://api.themoviedb.org/3/${media_type}/${content_id}?api_key=${API_KEY}`,
          "details"
        );
        this.fetchData(
          `https://api.themoviedb.org/3/${media_type}/${content_id}/credits?api_key=${API_KEY}`,
          "credits"
        );
        this.fetchData(
          `https://api.themoviedb.org/3/${media_type}/${content_id}/reviews?api_key=${API_KEY}`,
          "reviews"
        );
        this.fetchData(
          `https://api.themoviedb.org/3/${media_type}/${content_id}/recommendations?api_key=${API_KEY}`,
          "recommendations"
        );
        this.fetchData(
          `https://api.themoviedb.org/3/${media_type}/${content_id}/similar?api_key=${API_KEY}`,
          "similar"
        );
        break;

      case "person":
        this.fetchData(
          `https://api.themoviedb.org/3/${media_type}/${content_id}?api_key=${API_KEY}`,
          "details"
        );
        this.fetchData(
          `https://api.themoviedb.org/3/${media_type}/${content_id}/movie_credits?api_key=${API_KEY}`,
          "movie_credits"
        );
        this.fetchData(
          `https://api.themoviedb.org/3/${media_type}/${content_id}/tv_credits?api_key=${API_KEY}`,
          "tv_credits"
        );
        break;
      default:
        // Redirect to 404 here
        console.log("404 REDIRECT");
        break;
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.content_id !== nextProps.match.params.content_id
    ) {
      const { media_type, content_id } = nextProps.match.params;
      switch (media_type) {
        case "movie":
        case "tv":
          this.fetchData(
            `https://api.themoviedb.org/3/${media_type}/${content_id}?api_key=${API_KEY}`,
            "details"
          );
          this.fetchData(
            `https://api.themoviedb.org/3/${media_type}/${content_id}/credits?api_key=${API_KEY}`,
            "credits"
          );
          this.fetchData(
            `https://api.themoviedb.org/3/${media_type}/${content_id}/reviews?api_key=${API_KEY}`,
            "reviews"
          );
          this.fetchData(
            `https://api.themoviedb.org/3/${media_type}/${content_id}/recommendations?api_key=${API_KEY}`,
            "recommendations"
          );
          this.fetchData(
            `https://api.themoviedb.org/3/${media_type}/${content_id}/similar?api_key=${API_KEY}`,
            "similar"
          );
          break;

        case "person":
          this.fetchData(
            `https://api.themoviedb.org/3/${media_type}/${content_id}?api_key=${API_KEY}`,
            "details"
          );
          this.fetchData(
            `https://api.themoviedb.org/3/${media_type}/${content_id}/movie_credits?api_key=${API_KEY}`,
            "movie_credits"
          );
          this.fetchData(
            `https://api.themoviedb.org/3/${media_type}/${content_id}/tv_credits?api_key=${API_KEY}`,
            "tv_credits"
          );
          break;
        default:
          // Redirect to 404 here
          console.log("404 REDIRECT");
          break;
      }
    }
  }

  fetchData = (url, endpoint) => {
    axios
      .get(url)
      .then((data) => {
        const state = this.state;
        state[endpoint].data = data.data;
        state[endpoint].loading = false;
        this.setState({ ...state });
      })
      .catch((error) => {
        const state = this.state;
        state[endpoint].error = error;
        state[endpoint].loading = false;
        this.setState({ ...state });
      });
  };

  render() {
    return (
      <Details
        data={this.state}
        media_type={this.props.match.params.media_type}
      />
    );
  }
}

export default DetailsContainer;
