import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Crew.css";

class Crew extends Component {
  render() {
    const { crew } = this.props;
    const persons = crew.slice(0, 4).map(person => (
      <div key={uuidv4()} className="Crew-member">
        {/* <img
          src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
          alt={person.name}
          className="Crew-img"
        /> */}
        <p className="Crew-name">{person.name}</p>
        <p className="Crew-job">{person.job}</p>
      </div>
    ));
    return (
      <div className="Crew">
        <div className="Crew-grid">{persons}</div>
      </div>
    );
  }
}

export default Crew;
