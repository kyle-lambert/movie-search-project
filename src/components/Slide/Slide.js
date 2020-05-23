import React from "react";
import { Link } from "react-router-dom";

import { truncateStr, filterGenres } from "../../helpers";
import "./Slide.css";

function Slide({ item, width, isTypeMovie }) {
  const getTitle = () => {
    if (isTypeMovie)
      return item.title ? truncateStr(item.title, 25) : "No title";
    return item.name ? truncateStr(item.name, 25) : "No title";
  };

  const getGenres = () => {
    if (Array.isArray(item.genre_ids) && item.genre_ids.length > 0)
      return filterGenres("movie", item.genre_ids);
    return "No genres";
  };

  return isTypeMovie ? (
    <div className="Slide" style={{ width: `${width}%` }}>
      <Link to={`/details/movie/${item.id}`}>
        <div className="Slide-inner">
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt=""
            className="Slide-img"
          />
          <div className="Slide-info">
            <p className="Slide-title">{getTitle()}</p>
            <p className="Slide-sub">{getGenres()}</p>
          </div>
        </div>
      </Link>
    </div>
  ) : (
    <div className="Slide" style={{ width: `${width}%` }}>
      <Link to={`/details/tv/${item.id}`}>
        <div className="Slide-inner">
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt=""
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
