import React, { Component } from "react";
import "../css/Info.css";

class Info extends Component {
  getYear = str => {
    return str.substr(0, 4);
  };

  getTimePeriod = (first, last) => {
    return `${this.getYear(first)} - ${this.getYear(last)}`;
  };

  render() {
    const { details, media } = this.props;
    let content;
    if (media === "movie") {
      content = (
        <div className="Info">
          <h1 className="Info-title">{details.title}</h1>
          <div className="Info-sub">
            <p className="Info-sub-item">{`${details.runtime} mins`}</p>
            <p className="Info-sub-item">
              {details.genres.map(item => item.name).join(", ")}
            </p>
            <p className="Info-sub-item">{details.release_date.substr(0, 4)}</p>
          </div>
          {details.tagline ? (
            <p className="Info-tagline">{`"${details.tagline}"`}</p>
          ) : null}
          <p className="Info-overview">{details.overview}</p>
        </div>
      );
    } else if (media === "tv") {
      content = (
        <div className="Info">
          <h1 className="Info-title">{details.name}</h1>
          <div className="Info-sub">
            <p className="Info-sub-item">
              {this.getTimePeriod(
                details.first_air_date,
                details.last_air_date
              )}
            </p>
            <p className="Info-sub-item">
              {details.genres.map(item => item.name).join(", ")}
            </p>
            <p className="Info-sub-item">{`${details.number_of_seasons} seasons`}</p>
          </div>
          <p className="Info-overview">{details.overview}</p>
        </div>
      );
    }

    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default Info;
