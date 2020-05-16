import React from "react";

import Icon from "../Icon/Icon";
import "./BackButton.css";

function BackButton({ goBack }) {
  const handleClick = () => {
    goBack();
  };
  return (
    <button type="text" className="BackButton" onClick={handleClick}>
      <Icon iconClasses="fas fa-chevron-left" />
    </button>
  );
}

export default BackButton;
