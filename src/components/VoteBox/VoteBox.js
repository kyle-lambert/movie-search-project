import React from "react";

import Rating from "../Rating/Rating";
import "./VoteBox.css";

function VoteBox({ voteAverage, voteCount }) {
  return (
    <div className="VoteBox">
      <Rating voteAverage={voteAverage} />
      <div className="VoteBox-count">
        {voteCount ? `${voteCount} votes` : "0 votes"}
      </div>
    </div>
  );
}

export default VoteBox;
