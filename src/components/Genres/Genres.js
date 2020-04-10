import React from "react";
import "./Genres.css";

function Genres(props) {
  const generateString = (arr) => {
    return arr.map((item) => item.name).join(", ");
  };
  return (
    <p className="Genres">
      {props.genres && props.genres.length > 0
        ? generateString(props.genres)
        : "No genres available"}
    </p>
  );
}

export default Genres;
