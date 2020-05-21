import React from "react";
import "./Slide.css";

function Slide({ item, width }) {
  return (
    <div className="Slide" style={{ width: `${width}%` }}>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt=""
        className="Slide-img"
      />
    </div>
  );
}

export default Slide;
