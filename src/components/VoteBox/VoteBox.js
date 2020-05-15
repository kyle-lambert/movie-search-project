import React from "react";

import Rating from "../Rating/Rating";
import "./VoteBox.css";

function VoteBox({ vote_average, vote_count }) {
  return (
    <div className="VoteBox">
      <Rating vote_average={vote_average} />
      <div className="VoteBox-count">
        {vote_count ? `${vote_count} votes` : "0 votes"}
      </div>
    </div>
  );
}

export default VoteBox;
