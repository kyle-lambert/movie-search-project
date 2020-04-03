import React, { Component } from "react";
import Carousel from "./Carousel";
import Error from "./Error";
import axios from "axios";
import "../css/CarouselContainer.css";
const API_KEY = process.env.REACT_APP_API_KEY;

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: true,
      error: ""
    };
  }
  componentDidMount() {
    if (this.props.content_id) {
      axios
        .get(
          `https://api.themoviedb.org/3/${this.props.type}/${this.props.content_id}/${this.props.endpoint}?api_key=${API_KEY}`
        )
        .then(results => {
          if (results.status === 200 && results.data.results) {
            this.setState({ results: results.data.results, isLoading: false });
          } else {
            this.setState({ error: results.status, isLoading: false });
          }
        })
        .catch(error => {
          this.setState({ error: error, isLoading: false });
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/${this.props.type}/${this.props.time}?api_key=${API_KEY}`
        )
        .then(results => {
          if (results.status === 200 && results.data.results) {
            this.setState({ results: results.data.results, isLoading: false });
          } else {
            this.setState({ error: results.status, isLoading: false });
          }
        })
        .catch(error => {
          this.setState({ error: error, isLoading: false });
        });
    }
  }

  render() {
    const { error, isLoading, results } = this.state;
    if (error) {
      return <Error message="Sorry, we can't find any information on this." />;
    } else if (isLoading) {
      return <div>LOADING</div>;
    } else {
      return (
        <div className="CarouselContainer">
          {Array.isArray(results) && results.length > 0 ? (
            <Carousel results={results} type={this.props.type} />
          ) : (
            <Error message="Sorry, we can't find any information on this." />
          )}
        </div>
      );
    }
  }
}

export default CarouselContainer;
