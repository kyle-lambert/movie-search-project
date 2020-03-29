import React, { Component } from "react";
import "../css/Details.css";

class Details extends Component {
  buildString = array => {
    return array.map(item => item.name).join(", ");
  };
  render() {
    const { details, media } = this.props;
    let content;
    if (media === "movie") {
      content = (
        <div className="Details-grid">
          <div className="Details-item">
            <p className="Details-key">Revenue:</p>
            <p className="Details-value">{details.revenue}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Budget:</p>
            <p className="Details-value">{details.budget}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Status:</p>
            <p className="Details-value">{details.status}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Languages:</p>
            <p className="Details-value">
              {this.buildString(details.spoken_languages)}
            </p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Release Date:</p>
            <p className="Details-value">{details.release_date}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Production:</p>
            <p className="Details-value">
              {this.buildString(details.production_companies)}
            </p>
          </div>
        </div>
      );
    } else if (media === "tv") {
      content = (
        <div className="Details-grid">
          <div className="Details-item">
            <p className="Details-key">First Air Date:</p>
            <p className="Details-value">{details.first_air_date}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Last Air Date:</p>
            <p className="Details-value">{details.last_air_date}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Status:</p>
            <p className="Details-value">{details.status}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Seasons:</p>
            <p className="Details-value">{details.number_of_seasons}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Episodes:</p>
            <p className="Details-value">{details.number_of_episodes}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Production:</p>
            <p className="Details-value">
              {this.buildString(details.production_companies)}
            </p>
          </div>
        </div>
      );
    }
    return <div className="Details">{content}</div>;
  }
}

export default Details;
