import React, { Component } from "react";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Info from "./Info";
import Cast from "./Cast";
import Crew from "./Crew";
import Details from "./Details";
import SubDetails from "./SubDetails";
import "../css/Layout.css";

class Layout extends Component {
  render() {
    const { details, credits, media } = this.props;
    let output;
    if (media === "movie") {
      output = (
        <div className="Layout">
          <Backdrop
            title={details.title}
            backdrop_path={details.backdrop_path}
          />
          <div className="Layout-grid">
            <div className="Layout-sidebar">
              <Poster title={details.title} poster_path={details.poster_path} />
              <Details media="movie" details={details} />
            </div>

            <div className="Layout-infobar">
              <Info media="movie" details={details} />
              <Crew crew={credits.crew} />
              <Cast cast={credits.cast} />
              <SubDetails media="movie" details={details} />
            </div>
          </div>
        </div>
      );
    } else if (media === "tv") {
      output = (
        <div className="Layout">
          <Backdrop
            title={details.name}
            backdrop_path={details.backdrop_path}
          />
          <div className="Layout-grid">
            <div className="Layout-sidebar">
              <Poster title={details.name} poster_path={details.poster_path} />
              <Details media="tv" details={details} />
            </div>
            <div className="Layout-infobar">
              <Info media="tv" details={details} />
              <Crew crew={credits.crew} />
              <Cast cast={credits.cast} />
              <SubDetails media="tv" details={details} />
            </div>
          </div>
        </div>
      );
    }
    return <React.Fragment>{output}</React.Fragment>;
  }
}

export default Layout;
