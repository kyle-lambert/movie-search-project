import React, { Component } from "react";
import "../css/Details.css";

class Details extends Component {
  render() {
    const {
      status,
      revenue,
      budget,
      spoken_languages,
      production_companies
    } = this.props.details;
    const languages = spoken_languages.map(l => l.name).join(", ");
    const production = production_companies.map(l => l.name).join(", ");
    return (
      <div className="Details">
        <h2 className="Details-title">Details</h2>
        <div className="Details-grid">
          <div className="Details-item">
            <p className="Details-key">Revenue:</p>
            <p className="Details-value">{revenue}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Budget:</p>
            <p className="Details-value">{budget}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Status:</p>
            <p className="Details-value">{status}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Languages:</p>
            <p className="Details-value">{languages}</p>
          </div>
          <div className="Details-item">
            <p className="Details-key">Production:</p>
            <p className="Details-value">{production}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
