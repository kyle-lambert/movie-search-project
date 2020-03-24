import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
  render() {
    const { title, poster_path } = this.props.movie;
    const style = { animationDelay: `${80 * this.props.index}ms` };
    return (
      <div className="Card">
        <div className="Card-inner" style={style}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="Card-img"
          />
          <p className="Card-name">{title}</p>
        </div>
      </div>
    );
  }
}

export default Card;
