import React, { Component } from "react";
import "../css/CarouselCard.css";

class CarouselCard extends Component {
  render() {
    const { result, type } = this.props;
    let title;
    if (type === "movie") {
      title = (
        <p className="CarouselCard-title">
          {`${result.title ? result.title : "No title"}`}
        </p>
      );
    } else if (type === "tv") {
      title = (
        <p className="CarouselCard-title">
          {`${result.name ? result.name : "No title"}`}
        </p>
      );
    } else if (type === "person") {
      title = <div>PERSON</div>;
    }

    return (
      <div className="CarouselCard">
        {result.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
            alt={result.title}
            className="CarouselCard-img"
          />
        ) : (
          <div>NO IMAGE</div>
        )}
        {title}
      </div>
    );
  }
}

export default CarouselCard;
