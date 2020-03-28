import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Cast.css";

class Cast extends Component {
  render() {
    const { cast } = this.props;
    const actors = cast.slice(0, 5).map(actor => (
      <div key={uuidv4()} className="Cast-member">
        <div className="Cast-img-wrap">
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            className="Cast-img"
          />
          <div className="Cast-actor-wrap">
            <p className="Cast-name">{actor.name}</p>
            <p className="Cast-character">{actor.character}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="Cast">
        <h2 className="Cast-title">Cast</h2>
        <div className="Cast-grid">{actors}</div>
      </div>
    );
  }
}

export default Cast;
