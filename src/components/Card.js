import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
  render() {
    const { title, poster_path } = this.props.movie;
    return (
      <div className="Card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="Card-img"
        />
        <p className="Card-name">{title}</p>
      </div>
    );
  }
}

export default Card;
