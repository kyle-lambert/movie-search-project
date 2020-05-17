import React from "react";

import "./Rating.css";

function Rating({ voteAverage }) {
  voteAverage = `${voteAverage} / 10`;
  return <div className="Rating">{voteAverage}</div>;
}

export default Rating;
