import React from "react";
import { Link } from "react-router-dom";
import ContentError from "../ContentError/ContentError";
import "./PersonShowcaseItem.css";

function PersonShowcaseItem(props) {
  const { name, character, path, content_id } = props;
  return (
    <div className="PersonShowcaseItem">
      <Link
        to={`/details/person/${content_id}`}
        style={{ color: "inherit", textDecoration: "none" }}>
        <div className="PersonShowcaseItem-inner">
          {path ? (
            <img
              className="PersonShowcaseItem-img"
              src={`https://image.tmdb.org/t/p/w500/${path}`}
              alt={name}
            />
          ) : (
            <ContentError text="No image" />
          )}
          <div className="PersonShowcaseItem-info">
            <p className="PersonShowcaseItem-title">
              {name ? name : "No name"}
            </p>
            <p className="PersonShowcaseItem-character">
              {character ? character : "No character"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PersonShowcaseItem;
