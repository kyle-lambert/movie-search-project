import React from "react";
import { Link } from "react-router-dom";

import imagePlaceholder from "../../images/content-placeholder.svg";
import { truncateStr, filterGenres } from "../../helpers";
import "./Slide.css";

function Slide({ item, width, type }) {
  const getTitle = () => {
    if (type === "movie")
      return item.title ? truncateStr(item.title, 30) : "No title";
    return item.name ? truncateStr(item.name, 30) : "No title";
  };

  const getGenres = () => {
    if (Array.isArray(item.genre_ids) && item.genre_ids.length > 0)
      return filterGenres("movie", item.genre_ids);
    return "No genres";
  };

  const getImageSrc = () => {
    return item.poster_path
      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      : imagePlaceholder;
  };

  return (
    <div className="Slide" style={{ width: `${width}%` }}>
      <Link to={`/details/${type}/${item.id}`}>
        <div className="Slide-inner">
          <img
            src={getImageSrc()}
            alt={type === "movie" ? item.title : item.name}
            className="Slide-img"
          />
          <div className="Slide-info">
            <p className="Slide-title">{getTitle()}</p>
            <p className="Slide-sub">{getGenres()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Slide;
