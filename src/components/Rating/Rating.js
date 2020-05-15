import React from "react";

import "./Rating.css";

function Rating({ vote_average }) {
  vote_average = `${vote_average} / 10`;
  return <div className="Rating">{vote_average}</div>;
}

export default Rating;
