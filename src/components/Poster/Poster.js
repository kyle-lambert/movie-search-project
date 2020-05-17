import React from "react";

import "./Poster.css";
import imagePlaceholder from "../../images/content-placeholder.svg";

function Poster({ posterPath, title }) {
  posterPath = posterPath
    ? `https://image.tmdb.org/t/p/w500/${posterPath}`
    : imagePlaceholder;

  return (
    <div className="Poster">
      <img src={posterPath} alt={title} className="Poster-img" />
    </div>
  );
}

export default Poster;
