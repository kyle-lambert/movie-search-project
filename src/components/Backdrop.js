import React, { Component } from "react";
import "../css/Backdrop.css";

class Backdrop extends Component {
  render() {
    const { title, backdrop_path } = this.props;
    if (title && backdrop_path) {
      return (
        <div className="Backdrop">
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
            className="Backdrop-img"
          />
        </div>
      );
    } else {
      return (
        <div className="Backdrop-error">
          <p className="Backdrop-error-text">No backdrop found</p>
        </div>
      );
    }
  }
}

export default Backdrop;
