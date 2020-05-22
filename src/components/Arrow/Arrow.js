import React from "react";

import "./Arrow.css";

function Arrow({ disabled, direction, handleClick }) {
  const style = {
    left: `${direction === "left" ? "10px" : "unset"}`,
    right: `${direction === "right" ? "10px" : "unset"}`,
  };
  return (
    <button
      className="Arrow"
      disabled={disabled}
      style={style}
      onClick={handleClick}>
      {direction === "left" ? "left" : "right"}
    </button>
  );
}

export default Arrow;
