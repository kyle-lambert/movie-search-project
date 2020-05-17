import React from "react";
import "./Slide.css";

function Slide({ color, width }) {
  return (
    <div
      className="Slide"
      style={{ backgroundColor: color, width: `${width}%` }}></div>
  );
}

export default Slide;
