import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <section className="Section" style={{ backgroundColor: props.background }}>
      {props.children}
    </section>
  );
}

export default Section;
