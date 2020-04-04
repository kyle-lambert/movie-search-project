import React, { Component } from "react";
import "../css/SliderItem.css";

class SliderItem extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="SliderItem">
        {result.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
            alt={result.title}
            className="SliderItem-img"
          />
        ) : (
          <div>NO BACKDROP IMAGE</div>
        )}
        <div className="SliderItem-info">
          <img
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
            alt={result.title}
            className="SliderItem-poster"
          />
          <h2 className="SliderItem-title">
            {result.title ? result.title : "No title"}
          </h2>
        </div>
      </div>
    );
  }
}

export default SliderItem;
