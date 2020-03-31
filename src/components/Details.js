import React, { Component } from "react";

import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Info from "./Info";
import Crew from "./Crew";
import Cast from "./Cast";
import "../css/Details.css";

import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

// const id = 1399;
// const id = 69740;
const id = 82856;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      isLoading: true,
      isError: false
    };
  }

  async componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=credits,reviews`
      )
      .then(results => {
        this.setState({ results: results.data, isLoading: false });
      })
      .catch(error => {
        this.setState({ isError: true, isLoading: false });
      });
  }

  render() {
    const { results, isLoading, isError } = this.state;

    if (isError) {
      return <div>ERROR</div>;
    } else if (isLoading) {
      return <div>LOADING</div>;
    } else {
      switch (this.props.type) {
        case "tv":
          return (
            <div className="Details">
              <Backdrop
                title={results.name}
                backdrop_path={results.backdrop_path}
              />
              <div className="Details-grid">
                <header className="Details-header">
                  <div className="Details-header-poster">
                    <Poster
                      title={results.name}
                      poster_path={results.poster_path}
                    />
                  </div>
                  <div className="Details-header-main">
                    <Info type="tv" results={results} />
                    <Crew crew={results.credits.crew} />
                  </div>
                </header>
                <main className="Details-main">
                  <div className="Details-cast">
                    <Cast cast={results.credits.cast} />
                  </div>
                </main>
              </div>
            </div>
          );

        case "movie":
          return (
            <div>
              MOVIE
              <Backdrop
                title={results.name}
                backdrop_path={results.backdrop_path}
              />
            </div>
          );

        case "person":
          return <div>PERSON</div>;

        default:
          return <div>TYPE NOT FOUND</div>;
      }
    }
  }
}

export default Details;
