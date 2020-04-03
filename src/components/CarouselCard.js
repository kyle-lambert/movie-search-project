import React, { Component } from "react";
import "../css/CarouselCard.css";
import Error from "./Error";

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
      <React.Fragment>
        {result.poster_path ? (
          <div className="CarouselCard">
            <img
              src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
              alt={result.title}
              className="CarouselCard-img"
            />
            {title}
          </div>
        ) : (
          <Error message="No Image" />
        )}
      </React.Fragment>
    );
  }
}

export default CarouselCard;
