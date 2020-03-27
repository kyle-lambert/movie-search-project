import React, { Component } from "react";
import "../css/Backdrop.css";

class Backdrop extends Component {
  render() {
    const { title, backdrop_path } = this.props;
    return (
      <div className="Backdrop">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
          className="Backdrop-img"
        />
      </div>
    );
  }
}

export default Backdrop;
