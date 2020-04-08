import React, { Component } from "react";
import Details from "../Details/Details";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media_type: this.props.match.params.media_type,
      content_id: this.props.match.params.content_id,
      data: {
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
    };
  }

  componentDidMount() {
    const { media_type, content_id } = this.state;
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
  }

  fetchData = (url, endpoint) => {
    axios
      .get(url)
      .then((data) => {
        const state = this.state;
        state.data[endpoint].data = data.data;
        state.data[endpoint].loading = false;
        this.setState({ ...state });
      })
      .catch((error) => {
        const state = this.state;
        state.data[endpoint].error = error;
        state.data[endpoint].loading = false;
        this.setState({ ...state });
      });
  };

  render() {
    const { content_id, media_type, data } = this.state;
    return (
      <Details data={data} content_id={content_id} media_type={media_type} />
    );
  }
}

export default DetailsContainer;
