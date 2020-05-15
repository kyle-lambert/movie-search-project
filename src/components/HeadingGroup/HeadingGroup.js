import React from "react";

import "./HeadingGroup.css";

function HeadingGroup({ heading = "No title", subheading }) {
  return (
    <div className="HeadingGroup">
      <h1 className="HeadingGroup-heading">{heading}</h1>
      {subheading && <p className="HeadingGroup-subheading">{subheading}</p>}
    </div>
  );
}

export default HeadingGroup;
