import React from "react";

import BackButton from "../BackButton/BackButton";
import imagePlaceholder from "../../images/content-placeholder.svg";
import "./Backdrop.css";

function Backdrop({ data }) {
  const { backdropPath, title, goBack } = data;

  const imagePath = backdropPath
    ? `https://image.tmdb.org/t/p/original/${backdropPath}`
    : imagePlaceholder;

  return (
    <div className="Backdrop">
      <div className="Backdrop-button-wrap">
        <BackButton goBack={goBack} />
      </div>
      <img src={imagePath} alt={title} className="Backdrop-img" />
    </div>
  );
}

export default Backdrop;
