import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Crew.css";

class Crew extends Component {
  render() {
    const { crew } = this.props;
    return (
      <div className="Crew">
        <div className="Crew-grid">
          {Array.isArray(crew)
            ? crew.slice(0, 3).map((c) => (
                <div key={uuidv4()} className="Crew-member">
                  <p className="Crew-name">{c.name}</p>
                  <p className="Crew-job">{c.job}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Crew;
