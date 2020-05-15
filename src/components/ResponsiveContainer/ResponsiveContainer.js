import React from "react";

import "./ResponsiveContainer.css";

function ResponsiveContainer(props) {
  return <div className="ResponsiveContainer">{props.children}</div>;
}

export default ResponsiveContainer;
