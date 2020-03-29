import React, { Component } from "react";
import Crew from "./Crew";
import "../css/Info.css";

class Info extends Component {
  render() {
    const { title, runtime, genres, release_date, overview, crew } = this.props;

    return (
      <div className="Info">
        <h1 className="Info-title">{title}</h1>
        <div className="Info-sub">
          <p className="Info-sub-item">{`${runtime} mins`}</p>
          <p className="Info-sub-item">
            {genres.map(item => item.name).join(", ")}
          </p>
          <p className="Info-sub-item">{release_date.substr(0, 4)}</p>
        </div>
        <p className="Info-overview">{overview}</p>
        <Crew crew={crew} />
      </div>
    );
  }
}

export default Info;
