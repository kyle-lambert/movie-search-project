import React from "react";
import "./Rating.css";

function Rating(props) {
  return (
    <div className="Rating">
      <div className="Rating-average">
        {props.vote_average ? `${props.vote_average} / 10` : "0 / 10"}
      </div>
      <div className="Rating-count">
        {props.vote_count ? `${props.vote_count} votes` : "0 votes"}
      </div>
    </div>
  );
}

export default Rating;
