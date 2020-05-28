import React from "react";

import "./BackButton.css";

function BackButton({ goBack }) {
  const handleClick = () => {
    goBack();
  };
  return (
    <button type="text" className="BackButton" onClick={handleClick}>
      <i className="fas fa-arrow-circle-left"></i>
    </button>
  );
}

export default BackButton;
