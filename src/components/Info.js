import React, { Component } from "react";
import "../css/Info.css";

class Info extends Component {
  getYear = (str) => {
    return str.substr(0, 4);
  };

  render() {
    const { results, type } = this.props;

    switch (type) {
      case "tv":
        return (
          <div className="Info">
            <h1 className="Info-title">{results.name ? results.name : ""}</h1>
            {results.genres ? (
              <p className="Info-genre">
                {results.genres.map((g) => g.name).join(", ")}
              </p>
            ) : null}
            <p className="Info-overview">
              {results.overview ? results.overview : ""}
            </p>
          </div>
        );

      case "movie":
        return (
          <div className="Info">
            <h1 className="Info-title">{results.title ? results.title : ""}</h1>
            {results.genres ? (
              <p className="Info-genre">
                {results.genres.map((g) => g.name).join(", ")}
              </p>
            ) : null}
            {results.tagline ? (
              <p className="Info-tagline">{`"${results.tagline}"`}</p>
            ) : null}
            <p className="Info-overview">{results.overview}</p>
          </div>
        );

      case "person":
        return (
          <div className="Info">
            <h1 className="Info-title">
              {results.name ? results.name : "No name"}
            </h1>
            <p className="Info-tagline">
              {results.known_for_department
                ? results.known_for_department
                : null}
            </p>
            <p className="Info-overview">
              {results.biography ? results.biography : "No biography"}
            </p>
          </div>
        );

      default:
        return <div>type didnt match</div>;
    }
  }
}

export default Info;
