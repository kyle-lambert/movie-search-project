import React from "react";

import "./Arrow.css";

function Arrow({ disabled, direction, handleClick }) {
  const style = {
    left: `${direction === "left" ? "0" : "unset"}`,
    right: `${direction === "right" ? "0" : "unset"}`,
  };
  return (
    <button
      className="Arrow"
      disabled={disabled}
      onClick={handleClick}
      style={style}>
      {direction === "left" ? (
        <i className="fas fa-arrow-circle-left"></i>
      ) : (
        <i className="fas fa-arrow-circle-right"></i>
      )}
    </button>
  );
}

export default Arrow;
