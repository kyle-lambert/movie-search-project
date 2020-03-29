import React, { Component } from "react";
// import Navbar from "../Navbar";
import MovieLayout from "../MovieLayout";
import "../../css/Movie.css";
import { fetchData, buildCredits } from "../../utilities";
const API_KEY = process.env.REACT_APP_API_KEY;
// const movie_id = 181812;
// const movie_id = 495764;
// const movie_id = 530915;
const movie_id = 330457;

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      credits: {},
      reviews: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    const details = await fetchData("movie", "details", movie_id, API_KEY);
    const credits = await fetchData("movie", "credits", movie_id, API_KEY);
    const reviews = await fetchData("movie", "reviews", movie_id, API_KEY);
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
        {/* <Navbar /> */}
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <MovieLayout details={details} credits={credits} reviews={reviews} />
        )}
      </div>
    );
  }
}

export default Movie;
