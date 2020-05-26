import React from "react";

import BackButton from "../BackButton/BackButton";
import imagePlaceholder from "../../images/backdrop-placeholder.jpg";
import "./Backdrop.css";

function Backdrop({ backdropPath, alt, goBack }) {
  const imagePath = backdropPath
    ? `https://image.tmdb.org/t/p/original/${backdropPath}`
    : imagePlaceholder;

  return (
    <div className="Backdrop">
      <div className="Backdrop-button-wrap">
        <BackButton goBack={goBack} />
      </div>
      <img src={imagePath} alt={alt} className="Backdrop-img" />
    </div>
  );
}

export default Backdrop;
