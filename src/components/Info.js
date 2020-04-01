import React, { Component } from "react";
import "../css/Info.css";

class Info extends Component {
  getYear = str => {
    return str.substr(0, 4);
  };

  render() {
    const { results, type } = this.props;

    switch (type) {
      case "tv":
        return (
          <div className="Info">
            <h1 className="Info-title">{results.name ? results.name : ""}</h1>
            <div className="Info-sub">
              {results.first_air_date && results.last_air_date ? (
                <p className="Info-sub-item">
                  {`${this.getYear(results.first_air_date)} - ${this.getYear(
                    results.last_air_date
                  )}`}
                </p>
              ) : null}
              {results.genres ? (
                <p className="Info-sub-item">
                  {results.genres.map(g => g.name).join(", ")}
                </p>
              ) : null}
              {results.number_of_seasons && results.number_of_episodes ? (
                <p className="Info-sub-item">
                  {`${results.number_of_seasons} seasons, ${results.number_of_episodes} episodes`}
                </p>
              ) : null}
            </div>
            <p className="Info-overview">
              {results.overview ? results.overview : ""}
            </p>
          </div>
        );

      case "movie":
        return (
          <div className="Info">
            <h1 className="Info-title">{results.title ? results.title : ""}</h1>
            <div className="Info-sub">
              {results.runtime ? (
                <p className="Info-sub-item">{`${results.runtime} mins`}</p>
              ) : null}
              {results.genres ? (
                <p className="Info-sub-item">
                  {results.genres.map(g => g.name).join(", ")}
                </p>
              ) : null}
              {results.release_date ? (
                <p className="Info-sub-item">
                  {this.getYear(results.release_date)}
                </p>
              ) : null}
            </div>
            {results.tagline ? (
              <p className="Info-tagline">{`"${results.tagline}"`}</p>
            ) : null}
            <p className="Info-overview">{results.overview}</p>
          </div>
        );

      case "person":
        return <div>person</div>;

      default:
        return <div>type didnt match</div>;
    }
  }
}

export default Info;
