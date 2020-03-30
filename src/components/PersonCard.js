import React, { Component } from "react";
import "../css/PersonCard.css";

class PersonCard extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className="PersonCard">
        <div className="PersonCard-wrap">
          <img
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
            className="PersonCard-img"
          />
          <div className="PersonCard-actor-wrap">
            <p className="PersonCard-name">{person.name}</p>
            <p className="PersonCard-character">{person.character}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard;
