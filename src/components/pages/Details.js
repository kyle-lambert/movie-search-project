import React, { Component } from "react";
import Navbar from "../Navbar";
import Poster from "../Poster";
import Information from "../Information";
import "../../css/Details.css";
import Backdrop from "../Backdrop";
const API_KEY = process.env.REACT_APP_API_KEY;
// const movie_id = 181812;
const movie_id = 495764;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
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
    const {
      isLoading,
      content,
      content: { backdrop_path, title, poster_path }
    } = this.state;

    return (
      <div className="Details">
        <Navbar />
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <div className="Details-content">
            <Backdrop title={title} backdrop_path={backdrop_path} />
            <div className="Details-grid">
              <Poster title={title} poster_path={poster_path} />
              <Information content={content} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Details;
