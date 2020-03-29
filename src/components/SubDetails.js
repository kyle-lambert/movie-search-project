import React, { Component } from "react";
import "../css/SubDetails.css";

class SubDetails extends Component {
  buildString = array => {
    return array.map(item => item.name).join(", ");
  };
  render() {
    const { details, media } = this.props;
    let content;
    if (media === "movie") {
      content = (
        <div className="SubDetails-grid">
          <div className="SubDetails-item">
            <p className="SubDetails-key">Revenue:</p>
            <p className="SubDetails-value">{details.revenue}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Budget:</p>
            <p className="SubDetails-value">{details.budget}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Status:</p>
            <p className="SubDetails-value">{details.status}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Languages:</p>
            <p className="SubDetails-value">
              {this.buildString(details.spoken_languages)}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Release Date:</p>
            <p className="SubDetails-value">{details.release_date}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Production:</p>
            <p className="SubDetails-value">
              {this.buildString(details.production_companies)}
            </p>
          </div>
        </div>
      );
    } else if (media === "tv") {
      content = (
        <div className="SubDetails-grid">
          <div className="SubDetails-item">
            <p className="SubDetails-key">First Air Dare:</p>
            <p className="SubDetails-value">{details.first_air_date}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Last Air Date:</p>
            <p className="SubDetails-value">{details.last_air_date}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Status:</p>
            <p className="SubDetails-value">{details.status}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Seasons:</p>
            <p className="SubDetails-value">{details.number_of_seasons}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Episodes:</p>
            <p className="SubDetails-value">{details.number_of_episodes}</p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Production:</p>
            <p className="SubDetails-value">
              {this.buildString(details.production_companies)}
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="SubDetails">
        <h2 className="SubDetails-title">Details</h2>
        {content}
      </div>
    );
  }
}

export default SubDetails;
