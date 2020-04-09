import React from "react";
import ContentError from "../ContentError/ContentError";
import "./Backdrop.css";

function Backdrop(props) {
  const { title, path } = props;

  return (
    <div className="Backdrop">
      <div className="Backdrop-inner">
        {path ? (
          <img
            className="Backdrop-img"
            src={`https://image.tmdb.org/t/p/original/${path}`}
            alt={title}
          />
        ) : (
          <ContentError text="No backdrop image" />
        )}
      </div>
    </div>
  );
}

export default Backdrop;
