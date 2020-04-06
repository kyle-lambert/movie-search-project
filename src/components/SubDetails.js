import React, { Component } from "react";
import "../css/SubDetails.css";

class SubDetails extends Component {
  buildString = (array) => {
    return array.map((item) => item.name).join(", ");
  };
  render() {
    const { results, type } = this.props;
    let content;
    if (type === "movie") {
      content = (
        <div className="SubDetails-grid">
          <div className="SubDetails-item">
            <p className="SubDetails-key">Revenue:</p>
            <p className="SubDetails-value">
              {results.revenue ? results.revenue : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Budget:</p>
            <p className="SubDetails-value">
              {results.budget ? results.budget : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Status:</p>
            <p className="SubDetails-value">
              {results.status ? results.status : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Runtime:</p>
            <p className="SubDetails-value">
              {results.runtime ? `${results.runtime} mins` : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Languages:</p>
            <p className="SubDetails-value">
              {results.spoken_languages
                ? this.buildString(results.spoken_languages)
                : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Release Date:</p>
            <p className="SubDetails-value">
              {results.release_date ? results.release_date : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Production:</p>
            <p className="SubDetails-value">
              {results.production_companies &&
              results.production_companies.length > 0
                ? this.buildString(results.production_companies)
                : "-"}
            </p>
          </div>
        </div>
      );
    } else if (type === "tv") {
      content = (
        <div className="SubDetails-grid">
          <div className="SubDetails-item">
            <p className="SubDetails-key">Created By:</p>
            <p className="SubDetails-value">
              {results.created_by && results.created_by.length > 0
                ? this.buildString(results.created_by)
                : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">First Air Dare:</p>
            <p className="SubDetails-value">
              {results.first_air_date ? results.first_air_date : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Last Air Date:</p>
            <p className="SubDetails-value">
              {results.last_air_date ? results.last_air_date : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Status:</p>
            <p className="SubDetails-value">
              {results.status ? results.status : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Seasons:</p>
            <p className="SubDetails-value">
              {results.number_of_seasons ? results.number_of_seasons : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Episodes:</p>
            <p className="SubDetails-value">
              {results.number_of_episodes ? results.number_of_episodes : "-"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Production:</p>
            <p className="SubDetails-value">
              {results.production_companies &&
              results.production_companies.length > 0
                ? this.buildString(results.production_companies)
                : "-"}
            </p>
          </div>
        </div>
      );
    } else if (type === "person") {
      content = (
        <div className="SubDetails-grid">
          <div className="SubDetails-item">
            <p className="SubDetails-key">Date of Birth:</p>
            <p className="SubDetails-value">
              {results.birthday ? results.birthday : "-"}
            </p>
          </div>
          {results.deathday ? (
            <div className="SubDetails-item">
              <p className="SubDetails-key">Deathday:</p>
              <p className="SubDetails-value">{results.deathday}</p>
            </div>
          ) : null}
          <div className="SubDetails-item">
            <p className="SubDetails-key">Gender:</p>
            <p className="SubDetails-value">
              {results.gender === 1 ? "Female" : "Male"}
            </p>
          </div>
          <div className="SubDetails-item">
            <p className="SubDetails-key">Place Of Birth:</p>
            <p className="SubDetails-value">
              {results.place_of_birth ? `${results.place_of_birth} mins` : "-"}
            </p>
          </div>
        </div>
      );
    }
    return <div className="SubDetails">{content}</div>;
  }
}

export default SubDetails;
