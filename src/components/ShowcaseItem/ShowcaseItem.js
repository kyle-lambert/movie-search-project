import React from "react";
import NoImage from "../NoImage/NoImage";
import { Link } from "react-router-dom";
import "./ShowcaseItem.css";

function ShowcaseItem(props) {
  const { title, path, media_type, id } = props;
  return (
    <div className="ShowcaseItem">
      <Link
        to={`/details/${media_type}/${id}`}
        style={{ color: "inherit", listStyle: "none" }}>
        <div className="ShowcaseItem-inner">
          {path ? (
            <img
              className="ShowcaseItem-img"
              src={`https://image.tmdb.org/t/p/w500/${path}`}
              alt={title}
            />
          ) : (
            <NoImage />
          )}
          <p className="ShowcaseItem-title">{title ? title : "No title"}</p>
        </div>
      </Link>
    </div>
  );
}

export default ShowcaseItem;
