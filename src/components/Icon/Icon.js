import React from "react";
import "./Icon.css";

function Icon({ iconClasses, hover, secondary }) {
  const classNames = `Icon ${hover ? "Icon-hover" : ""} ${
    secondary ? "Icon-secondary" : ""
  }`;
  return (
    <div className={classNames}>
      <i className={iconClasses}></i>
    </div>
  );
}

export default Icon;
