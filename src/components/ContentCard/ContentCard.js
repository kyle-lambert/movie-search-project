import React from "react";
import ContentError from "../ContentError/ContentError";
import { Link } from "react-router-dom";
import "./ContentCard.css";

function ContentCard(props) {
  const { item, media_type } = props;
  const title = media_type === "movie" ? item.title : item.name;
  return (
    <div className="ContentCard">
      <Link
        to={`/details/${media_type}/${item.id}`}
        style={{ color: "inherit", textDecoration: "none" }}>
        <div className="ContentCard-inner">
          {item.poster_path ? (
            <img
              className="ContentCard-img"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={media_type === "movie" ? item.title : item.name}
            />
          ) : (
            <ContentError text="No image" />
          )}
          <p className="ContentCard-title">{title ? title : "No title"}</p>
        </div>
      </Link>
    </div>
  );
}

export default ContentCard;
