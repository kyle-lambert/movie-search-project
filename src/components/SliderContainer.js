import React, { Component } from "react";
import Slider from "./Slider";
import Error from "./Error";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isFetching: true,
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(results => {
        this.setState({
          results: results.data.results,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ error: error, isLoading: false });
      });
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
            <Slider results={results} />
          ) : (
            <Error message="Sorry, we can't find any information on this." />
          )}
        </div>
      );
    }
  }
}

export default SliderContainer;
