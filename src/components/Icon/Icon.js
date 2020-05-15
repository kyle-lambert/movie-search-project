import React from "react";
import "./Icon.css";

function Icon({ iconClasses }) {
  return (
    <div className="Icon">
      <i className={iconClasses}></i>
    </div>
  );
}

export default Icon;
