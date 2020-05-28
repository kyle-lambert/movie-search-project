import React from "react";

import "./Poster.css";
import imageContentPlaceholder from "../../images/content-placeholder-dark.svg";

function Poster({ posterPath, alt }) {
  posterPath = posterPath
    ? `https://image.tmdb.org/t/p/w500/${posterPath}`
    : imageContentPlaceholder;

  return (
    <div className="Poster">
      <img src={posterPath} alt={alt} className="Poster-img" />
    </div>
  );
}

export default Poster;
