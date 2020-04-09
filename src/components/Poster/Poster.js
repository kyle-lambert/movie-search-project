import React from "react";
import ContentError from "../ContentError/ContentError";
import "./Poster.css";

function Poster(props) {
  const { title, path } = props;
  return (
    <div className="Poster">
      {path ? (
        <img
          className="Poster-img"
          src={`https://image.tmdb.org/t/p/w500/${path}`}
          alt={title}
        />
      ) : (
        <ContentError text="No image" />
      )}
    </div>
  );
}

export default Poster;
