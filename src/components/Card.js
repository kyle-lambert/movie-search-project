import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Card.css";

class Card extends Component {
  render() {
    const { title, poster_path, media_type, id } = this.props.content;
    const style = { animationDelay: `${80 * this.props.index}ms` };
    return (
      <Link to={`/${media_type}/${id}`}>
        <div className="Card" style={style}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className="Card-img"
          />
          <p className="Card-title">{title}</p>
        </div>
      </Link>
    );
  }
}

export default Card;
