import React, { Component } from "react";
// import Navbar from "../Navbar";
import Content from "../Content";
import "../../css/Movie.css";
const API_KEY = process.env.REACT_APP_API_KEY;
// const movie_id = 181812;
const movie_id = 495764;
// const movie_id = 530915;
// const movie_id = 330457;

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      credits: {},
      reviews: {},
      isLoading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  buildCredits = credits => {
    if (credits) {
      const crew = credits.crew.filter(c => c.name && c.job);
      const cast = credits.cast.filter(
        c => c.character && c.name && c.profile_path
      );
      return {
        crew: crew,
        cast: cast
      };
    } else {
      return [];
    }
  };

  async componentDidMount() {
    const details = await this.fetchData("details");
    const credits = await this.fetchData("credits");
    const reviews = await this.fetchData("reviews");
    this.setState({
      details: details,
      credits: this.buildCredits(credits),
      reviews: reviews,
      isLoading: false
    });
  }

  async fetchData(type) {
    if (type === "details") {
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
    } else {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}/${type}?api_key=${API_KEY}`
        );
        const data = await res.json();
        if (data) {
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { isLoading, details, credits, reviews } = this.state;

    return (
      <div className="Movie">
        {/* <Navbar /> */}
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <Content details={details} credits={credits} reviews={reviews} />
        )}
      </div>
    );
  }
}

export default Movie;
