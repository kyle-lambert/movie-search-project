import React, { Component } from "react";
import Carousel from "./Carousel";
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
    setTimeout(() => {
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
    }, 1000);
  }

  render() {
    const { error, isLoading, results } = this.state;
    if (error) {
      return <div>ERROR</div>;
    } else if (isLoading) {
      return <div>LOADING</div>;
    } else {
      return (
        <div className="CarouselContainer">
          {Array.isArray(results) && results.length > 0 ? (
            <Carousel results={results} type={this.props.type} />
          ) : (
            <div className="CarouselContainer-error">
              Sorry, we can't find any information on this.
            </div>
          )}
        </div>
      );
    }
  }
}

export default CarouselContainer;
