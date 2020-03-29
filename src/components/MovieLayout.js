import React, { Component } from "react";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Info from "./Info";
import Cast from "./Cast";
import Crew from "./Crew";
import Details from "./Details";
import SubDetails from "./SubDetails";
import "../css/MovieLayout.css";

class MovieLayout extends Component {
  render() {
    const { details, credits } = this.props;

    return (
      <div className="MovieLayout">
        <Backdrop title={details.title} backdrop_path={details.backdrop_path} />
        <div className="MovieLayout-grid">
          <div className="MovieLayout-sidebar">
            <Poster title={details.title} poster_path={details.poster_path} />
            <Details media="movie" details={details} />
          </div>

          <div className="MovieLayout-infobar">
            <Info media="movie" details={details} />
            <Crew crew={credits.crew} />
            <Cast cast={credits.cast} />
            <SubDetails media="movie" details={details} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieLayout;
