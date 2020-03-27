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
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      if (data) {
        setTimeout(() => {
          this.setState({ content: data, isLoading: false });
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { isLoading, content } = this.state;

    return (
      <div className="Movie">
        <Navbar />
        {isLoading ? <div>LOADING</div> : <Content content={content} />}
      </div>
    );
  }
}

export default Movie;
