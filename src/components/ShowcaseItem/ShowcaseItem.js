import React from "react";
import ContentError from "../ContentError/ContentError";
import { Link } from "react-router-dom";
import "./ShowcaseItem.css";

function ShowcaseItem(props) {
  const { title, path, media_type, content_id } = props;
  return (
    <div className="ShowcaseItem">
      <Link
        to={`/details/${media_type}/${content_id}`}
        style={{ color: "inherit", textDecoration: "none" }}>
        <div className="ShowcaseItem-inner">
          {path ? (
            <img
              className="ShowcaseItem-img"
              src={`https://image.tmdb.org/t/p/w500/${path}`}
              alt={title}
            />
          ) : (
            <ContentError text="No image" height="350px" />
          )}
          <p className="ShowcaseItem-title">{title ? title : "No title"}</p>
        </div>
      </Link>
    </div>
  );
}

export default ShowcaseItem;
