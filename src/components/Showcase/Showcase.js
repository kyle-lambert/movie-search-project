import React from "react";
import "./Showcase.css";

function Showcase(props) {
  return (
    <div className="Showcase">
      <h2 className="Showcase-title">{props.title}</h2>
      {props.render()}
    </div>
  );
}

export default Showcase;
