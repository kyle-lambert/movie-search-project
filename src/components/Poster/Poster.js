import React from "react";

import "./Poster.css";
import imagePlaceholder from "../../images/content-placeholder.svg";

function Poster({ path, title }) {
  path = path ? `https://image.tmdb.org/t/p/w500/${path}` : imagePlaceholder;

  return (
    <div className="Poster">
      <img src={path} alt={title} className="Poster-img" />
    </div>
  );
}

export default Poster;
