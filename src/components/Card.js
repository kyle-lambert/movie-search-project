import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
  render() {
    const { title, poster_path } = this.props.content;
    const style = { animationDelay: `${80 * this.props.index}ms` };
    return (
      <div className="Card" style={style}>
        <div className="Card-inner">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className="Card-img"
          />
          <p className="Card-title">{title}</p>
        </div>
      </div>
    );
  }
}

export default Card;
