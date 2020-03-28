import React, { Component } from "react";
import Navbar from "../Navbar";
import Content from "../Content";
import "../../css/Movie.css";
const API_KEY = process.env.REACT_APP_API_KEY;
const movie_id = 181812;
// const movie_id = 495764;

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      isLoading: true
    };
    this.getDetails = this.getDetails.bind(this);
    this.getCredits = this.getCredits.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  async componentDidMount() {
    const details = await this.getDetails();
    const credits = await this.getCredits();
    const reviews = await this.getReviews();
    this.setState({
      content: { ...details, ...credits, ...reviews },
      isLoading: false
    });
  }

  async getDetails() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getCredits() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`
      );
      const data = await res.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getReviews() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`
      );
      const data = await res.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { isLoading, content } = this.state;

    return (
      <div className="Movie">
        {/* <Navbar /> */}
        {isLoading ? <div>LOADING</div> : <Content content={content} />}
      </div>
    );
  }
}

export default Movie;
