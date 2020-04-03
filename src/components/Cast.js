import React, { Component } from "react";
import PersonCard from "./PersonCard";
import { v4 as uuidv4 } from "uuid";
import "../css/Cast.css";

class Cast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <div className="Cast">
        <h2 className="Cast-title">Cast</h2>
        {Array.isArray(cast) && cast.length > 0 ? (
          <div className="Cast-grid">
            {cast.slice(0, 10).map(c => (
              <PersonCard key={uuidv4()} person={c} />
            ))}
          </div>
        ) : (
          <div className="Cast-error">
            Sorry we don't have any information on Cast members.
          </div>
        )}
      </div>
    );
  }
}

export default Cast;
