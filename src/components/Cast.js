import React, { Component } from "react";
import PersonCard from "./PersonCard";
import { v4 as uuidv4 } from "uuid";
import "../css/Cast.css";

class Cast extends Component {
  render() {
    const { cast } = this.props;
    const actors = cast
      .slice(0, 10)
      .map(person => <PersonCard key={uuidv4()} person={person} />);
    return (
      <div className="Cast">
        <h2 className="Cast-title">Cast</h2>
        <div className="Cast-grid">{actors}</div>
      </div>
    );
  }
}

export default Cast;
