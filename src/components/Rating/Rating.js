import React from "react";

import "./Rating.css";

function Rating({ voteAverage }) {
  const getAverage = () => {
    return Number.isInteger(voteAverage)
      ? `${voteAverage}.0 / 10`
      : `${voteAverage} / 10`;
  };
  return <div className="Rating">{getAverage()}</div>;
}

export default Rating;
