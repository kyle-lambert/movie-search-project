import React, { Component } from "react";
import Details from "../Details/Details";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    const { media_type, content_id } = this.props.match.params;
    switch (media_type) {
      case "movie":
        this.fetchMovieData(media_type, content_id);
        break;
      case "tv":
        this.fetchTVData(media_type, content_id);
        break;
      case "person":
        this.fetchPersonData(media_type, content_id);
        break;
      default:
        // Redirect 404 here
        break;
    }
  }

  fetchData = (url, endpoint, media_type) => {
    axios
      .get(url)
      .then((data) => {
        const state = this.state;
        state[media_type][endpoint].data = data.data;
        state[media_type][endpoint].loading = false;
        this.setState({ ...state });
      })
      .catch((error) => {
        const state = this.state;
        state[media_type][endpoint].error = error;
        state[media_type][endpoint].loading = false;
        this.setState({ ...state });
      });
  };

  fetchMovieData = (media_type, content_id) => {
    setTimeout(() => {});
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}?api_key=${API_KEY}`,
      "details",
      "movie"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/credits?api_key=${API_KEY}`,
      "credits",
      "movie"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/reviews?api_key=${API_KEY}`,
      "reviews",
      "movie"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/recommendations?api_key=${API_KEY}`,
      "recommendations",
      "movie"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/similar?api_key=${API_KEY}`,
      "similar",
      "movie"
    );
  };

  fetchTVData = (media_type, content_id) => {
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}?api_key=${API_KEY}`,
      "details",
      "tv"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/credits?api_key=${API_KEY}`,
      "credits",
      "tv"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/reviews?api_key=${API_KEY}`,
      "reviews",
      "tv"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/recommendations?api_key=${API_KEY}`,
      "recommendations",
      "tv"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/similar?api_key=${API_KEY}`,
      "similar",
      "tv"
    );
  };

  fetchPersonData = (media_type, content_id) => {
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}?api_key=${API_KEY}`,
      "details",
      "person"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/movie_credits?api_key=${API_KEY}`,
      "movie_credits",
      "person"
    );
    this.fetchData(
      `https://api.themoviedb.org/3/${media_type}/${content_id}/tv_credits?api_key=${API_KEY}`,
      "tv_credits",
      "person"
    );
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.content_id !== nextProps.match.params.content_id
    ) {
      const { media_type, content_id } = nextProps.match.params;
      this.setState(getInitialState());
      switch (media_type) {
        case "movie":
          this.fetchMovieData(media_type, content_id);
          break;
        case "tv":
          this.fetchTVData(media_type, content_id);
          break;
        case "person":
          this.fetchPersonData(media_type, content_id);
          break;

        default:
          break;
      }
    }
  }

  renderData = (media_type) => {
    const { movie, tv, person } = this.state;
    if (media_type === "movie") return movie;
    if (media_type === "tv") return tv;
    if (media_type === "person") return person;
  };

  render() {
    const { media_type } = this.props.match.params;
    return (
      <Details data={this.renderData(media_type)} media_type={media_type} />
    );
  }
}

export default DetailsContainer;

const getInitialState = () => {
  return {
    movie: {
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
    },
    tv: {
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
    },
    person: {
      details: {
        data: [],
        loading: true,
        error: "",
      },
      tv_credits: {
        data: [],
        loading: true,
        error: "",
      },
      movie_credits: {
        data: [],
        loading: true,
        error: "",
      },
    },
  };
};
