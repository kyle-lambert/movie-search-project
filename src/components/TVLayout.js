import React, { Component } from "react";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Details from "./Details";
import Info from "./Info";
import SubDetails from "./SubDetails";
import "../css/TVLayout.css";

class TVLayout extends Component {
  render() {
    const { details } = this.props;
    return (
      <div className="TVLayout">
        <Backdrop title={details.name} backdrop_path={details.backdrop_path} />
        <div className="TVLayout-grid">
          <div className="TVLayout-sidebar">
            <Poster title={details.name} poster_path={details.poster_path} />
            <Details media="tv" details={details} />
          </div>
          <div className="TVLayout-infobar">
            <Info media="tv" details={details} />
            <SubDetails media="tv" details={details} />
          </div>
        </div>
      </div>
    );
  }
}

export default TVLayout;
