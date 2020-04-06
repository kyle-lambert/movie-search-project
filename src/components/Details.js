import React, { Component } from "react";

import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Info from "./Info";
import Crew from "./Crew";
import Cast from "./Cast";
import Spacer from "./Spacer";
import Reviews from "./Reviews";
import Error from "./Error";
import SubDetails from "./SubDetails";
import Carousel from "./Carousel";
import "../css/Details.css";

import axios from "axios";
import CarouselContainer from "./CarouselContainer";

const API_KEY = process.env.REACT_APP_API_KEY;
// const id = 530915;
// const id = 443791;

const id = 1399;
// const id = 69740;
// const id = 82856;

// const id = 298;
// const id = 1461;
// const id = 53328;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      isLoading: true,
      error: "",
    };
  }

  async componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/${this.props.type}/${id}?api_key=${API_KEY}&append_to_response=credits,reviews`
      )
      .then((results) => {
        this.setState({ results: results.data, isLoading: false });
      })
      .catch((error) => {
        this.setState({ error: error, isLoading: false });
      });
  }

  render() {
    const { results, isLoading, error } = this.state;

    if (error) {
      return <Error message="Sorry, there was a problem fetching this data." />;
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
              <main className="Details-main">
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
                  <div className="Details-header-subdetails">
                    <SubDetails type="tv" results={results} />
                  </div>
                </header>
                <section className="Details-cast">
                  <Cast cast={results.credits.cast} />
                </section>
                <section className="Details-similar">
                  <h2 className="Details-title">Similar...</h2>
                  <CarouselContainer
                    page="details"
                    type="tv"
                    content_id={results.id}
                    endpoint="similar"
                  />
                </section>
                <Spacer />
                <section className="Details-recommended">
                  <h2 className="Details-title">Recommendations...</h2>
                  <CarouselContainer
                    page="details"
                    type="tv"
                    content_id={results.id}
                    endpoint="recommendations"
                  />
                </section>
                <section className="Details-reviews">
                  <Reviews reviews={results.reviews.results} />
                </section>
              </main>
            </div>
          );

        case "movie":
          return (
            <div className="Details">
              <Backdrop
                title={results.title}
                backdrop_path={results.backdrop_path}
              />
              <main className="Details-main">
                <header className="Details-header">
                  <div className="Details-header-poster">
                    <Poster
                      title={results.title}
                      poster_path={results.poster_path}
                    />
                  </div>
                  <div className="Details-header-main">
                    <Info type="movie" results={results} />
                    <Crew crew={results.credits.crew} />
                  </div>
                  <div className="Details-header-subdetails">
                    <SubDetails type="movie" results={results} />
                  </div>
                </header>
                <section className="Details-cast">
                  <Cast cast={results.credits.cast} />
                </section>
                <section className="Details-similar">
                  <h2 className="Details-title">Similar...</h2>
                  <CarouselContainer
                    page="details"
                    type="movie"
                    content_id={results.id}
                    endpoint="similar"
                  />
                </section>
                <Spacer />
                <section className="Details-recommended">
                  <h2 className="Details-title">Recommendations...</h2>
                  <CarouselContainer
                    page="details"
                    type="movie"
                    content_id={results.id}
                    endpoint="recommendations"
                  />
                </section>
                <section className="Details-reviews">
                  <Reviews reviews={results.reviews.results} />
                </section>
              </main>
            </div>
          );

        case "person":
          return (
            <div className="Details">
              <main className="Details-main Details-main-person">
                <header className="Details-header">
                  <div className="Details-header-poster">
                    <Poster
                      title={results.name}
                      poster_path={results.profile_path}
                    />
                  </div>
                  <div className="Details-header-main">
                    <Info type="person" results={results} />
                  </div>
                  <div className="Details-header-subdetails">
                    <SubDetails type="person" results={results} />
                  </div>
                </header>
                <section className="Details-similar">
                  <h2 className="Details-title">Staring...</h2>
                  <Carousel results={results.credits.cast} />
                </section>
                <Spacer />
                <section className="Details-reviews">
                  <Reviews reviews={results.reviews.results} />
                </section>
              </main>
            </div>
          );
        default:
          return <div>TYPE NOT FOUND</div>;
      }
    }
  }
}

export default Details;
