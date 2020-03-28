import React, { Component } from "react";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Info from "./Info";
import Crew from "./Crew";
import Cast from "./Cast";
import Details from "./Details";
import "../css/Content.css";

class Content extends Component {
  render() {
    const {
      details,
      details: {
        title,
        poster_path,
        backdrop_path,
        runtime,
        release_date,
        genres,
        overview
      }
    } = this.props;
    const { crew, cast } = this.props.credits;
    return (
      <div className="Content">
        <Backdrop title={title} backdrop_path={backdrop_path} />
        <div className="Content-grid">
          <Poster title={title} poster_path={poster_path} />
          <Info
            title={title}
            runtime={runtime}
            release_date={release_date}
            genres={genres}
            overview={overview}
          />
          <Crew crew={crew} />
          <Cast cast={cast} />
          <Details details={details} />
        </div>
      </div>
    );
  }
}

export default Content;
