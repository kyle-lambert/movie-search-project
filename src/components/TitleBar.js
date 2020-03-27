import React, { Component } from "react";
import "../css/TitleBar.css";

class TitleBar extends Component {
  buildYear = str => {
    return `(${str.substr(0, 4)})`;
  };

  buildGenres = arr => {
    return arr.map(item => item.name).join(", ");
  };

  render() {
    const { title, release_date, runtime, genres } = this.props.content;

    return (
      <div className="TitleBar">
        <h1 className="TitleBar-title">
          {title}
          <span className="TitleBar-year">{this.buildYear(release_date)}</span>
        </h1>
        <div className="TitleBar-sub">
          <span className="TitleBar-span">{`${runtime} mins`}</span>
          <span className="TitleBar-span">{this.buildGenres(genres)}</span>
          <span className="TitleBar-span">{release_date}</span>
        </div>
      </div>
    );
  }
}

export default TitleBar;
