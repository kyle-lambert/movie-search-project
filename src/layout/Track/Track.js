import React from "react";
import "./Track.css";

function Track(props) {
  return (
    <div
      className="Track"
      style={{
        height: props.height,
        minHeight: props.min_height,
      }}>
      {props.children}
    </div>
  );
}

export default Track;
