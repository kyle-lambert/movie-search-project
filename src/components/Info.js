import React, { Component } from "react";
import "../css/Info.css";

class Info extends Component {
  render() {
    const { title, runtime, genres, release_date, overview } = this.props;

    return (
      <div className="Info">
        <h1 className="Info-title">{title}</h1>
        <div className="Info-sub">
          <p className="Info-sub-item">{`${runtime} mins`}</p>
          <p className="Info-sub-item">
            {genres.map(item => item.name).join(", ")}
          </p>
          <p className="Info-sub-item">{release_date}</p>
        </div>
        <p className="Info-overview">{overview}</p>
      </div>
    );
  }
}

export default Info;
