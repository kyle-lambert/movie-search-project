import React from "react";
import "./ShowcaseItem.css";

function ShowcaseItem(props) {
  return (
    <div className="ShowcaseItem">
      <div className="ShowcaseItem-inner">
        <img
          className="ShowcaseItem-img"
          src={`https://image.tmdb.org/t/p/w500/${props.path}`}
          alt={props.title}
        />
        <p className="ShowcaseItem-title">{props.title}</p>
      </div>
    </div>
  );
}

export default ShowcaseItem;
