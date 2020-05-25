import React from "react";

import "./Poster.css";
import imagePlaceholder from "../../images/content-placeholder-light.svg";

function Poster({ posterPath, alt }) {
  posterPath = posterPath
    ? `https://image.tmdb.org/t/p/w500/${posterPath}`
    : imagePlaceholder;

  return (
    <div className="Poster">
      <img src={posterPath} alt={alt} className="Poster-img" />
    </div>
  );
}

export default Poster;
