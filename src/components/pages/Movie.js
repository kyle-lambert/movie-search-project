import React, { Component } from "react";
import "../../css/Movie.css";
import { fetchData, buildCredits } from "../../utilities";
const API_KEY = process.env.REACT_APP_API_KEY;

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      credits: {},
      reviews: {},
      movie_id: this.props.routeProps.match.params.id,
      isLoading: true
    };
  }

  async componentDidMount() {
    const details = await fetchData(
      "movie",
      "details",
      this.state.movie_id,
      API_KEY
    );
    const credits = await fetchData(
      "movie",
      "credits",
      this.state.movie_id,
      API_KEY
    );
    const reviews = await fetchData(
      "movie",
      "reviews",
      this.state.movie_id,
      API_KEY
    );
    this.setState({
      details: details,
      credits: buildCredits(credits),
      reviews: reviews,
      isLoading: false
    });
  }

  render() {
    const { isLoading, details, credits, reviews } = this.state;

    return (
      <div className="Movie">
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <Layout
            media="movie"
            details={details}
            credits={credits}
            reviews={reviews}
          />
        )}
      </div>
    );
  }
}

export default Movie;
