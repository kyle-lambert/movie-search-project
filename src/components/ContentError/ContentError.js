import React from "react";
import "./ContentError.css";

function ContentError(props) {
  return (
    <div className="ContentError" style={{ height: props.height }}>
      <p className="ContentError-text">{props.text}</p>
    </div>
  );
}

export default ContentError;
