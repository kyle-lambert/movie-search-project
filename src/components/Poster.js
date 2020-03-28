import React, { Component } from "react";
import "../css/Poster.css";

class Poster extends Component {
  render() {
    const { title, poster_path } = this.props;
    return (
      <div className="Poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="Poster-img"
        />
        {/* <div className="Poster-production">
          {production_companies.map(company => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
              alt={company.name}
              className="Poster-production-logo"
            />
          ))}
        </div> */}
      </div>
    );
  }
}

export default Poster;
