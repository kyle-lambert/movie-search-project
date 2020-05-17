import React from "react";

import "./Arrow.css";

function Arrow({ direction, handleClick }) {
  const style = {
    left: `${direction === "left" ? "10px" : "unset"}`,
    right: `${direction === "right" ? "10px" : "unset"}`,
  };
  return (
    <div className="Arrow" style={style} onClick={handleClick}>
      {direction === "left" ? "left" : "right"}
    </div>
  );
}

export default Arrow;
