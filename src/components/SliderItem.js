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
          <h2 className="SliderItem-title">
            {result.title ? result.title : "No title"}
          </h2>
          <div className="SliderItem-votes-container">
            <div className="SliderItem-average">
              {result.vote_average ? `${result.vote_average}/10` : "0/10"}
            </div>
            <div className="SliderItem-count">
              {result.vote_count ? `${result.vote_count} votes` : "0 votes"}
            </div>
          </div>
          <button className="SliderItem-link">See more</button>
        </div>
      </div>
    );
  }
}

export default SliderItem;
