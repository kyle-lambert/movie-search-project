import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Cast.css";
import CarouselCard from "./CarouselCard";

class Cast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <div className="Cast">
        <h2 className="Cast-title">Top Billed Cast...</h2>
        {Array.isArray(cast) && cast.length > 0 ? (
          <div className="Cast-grid">
            {cast.slice(0, 6).map((c) => (
              <CarouselCard key={uuidv4()} result={c} type="person" />
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
