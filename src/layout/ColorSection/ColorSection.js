import React from "react";
import "./ColorSection.css";

function ColorSection(props) {
  return <section className="ColorSection">{props.children}</section>;
}

export default ColorSection;
