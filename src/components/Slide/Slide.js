import React from "react";
import { Link } from "react-router-dom";

import imageContentPlaceholder from "../../images/content-placeholder-light.svg";
import { truncateStr, filterGenres } from "../../helpers";
import Rating from "../Rating/Rating";
import "./Slide.css";

function Slide({ item, width, type }) {
  const getTitle = () => {
    if (type === "movie")
      return item.title ? truncateStr(item.title, 30) : "No title";
    return item.name ? truncateStr(item.name, 30) : "No title";
  };

  const getGenres = () => {
    if (Array.isArray(item.genre_ids) && item.genre_ids.length > 0)
      return filterGenres(type, item.genre_ids);
    return "No genres";
  };

  const getImageSrc = () => {
    if (type === "person") {
      return item.profile_path
        ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
        : imageContentPlaceholder;
    }
    return item.poster_path
      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      : imageContentPlaceholder;
  };

  const getMovieSlideJSX = () => {
    return (
      <Link to={`/details/movie/${item.id}`}>
        <div className="Slide-inner">
          <img src={getImageSrc()} alt={item.title} className="Slide-img" />
          <div className="Slide-rating">
            <Rating voteAverage={item.vote_average} />
          </div>
          <div className="Slide-info">
            <p className="Slide-title">{getTitle()}</p>
            <p className="Slide-sub">{getGenres()}</p>
          </div>
        </div>
      </Link>
    );
  };

  const getTVSlideJSX = () => {
    return (
      <Link to={`/details/tv/${item.id}`}>
        <div className="Slide-inner">
          <img src={getImageSrc()} alt={item.name} className="Slide-img" />
          <div className="Slide-rating">
            <Rating voteAverage={item.vote_average} />
          </div>
          <div className="Slide-info">
            <p className="Slide-title">{getTitle()}</p>
            <p className="Slide-sub">{getGenres()}</p>
          </div>
        </div>
      </Link>
    );
  };

  const getPersonSlideJSX = () => {
    return (
      <Link to={`/details/person/${item.id}`}>
        <div className="Slide-inner">
          <img src={getImageSrc()} alt={item.name} className="Slide-img" />
          <div className="Slide-info">
            <p className="Slide-title">{getTitle()}</p>
            <p className="Slide-sub">
              {item.character
                ? truncateStr(item.character, 30)
                : "No character"}
            </p>
          </div>
        </div>
      </Link>
    );
  };

  const renderSlide = () => {
    switch (type) {
      case "movie":
        return getMovieSlideJSX();
      case "tv":
        return getTVSlideJSX();
      case "person":
        return getPersonSlideJSX();
      default:
        console.log("renderSlide type not found");
    }
  };

  return (
    <div className="Slide" style={{ width: `${width}%` }}>
      {renderSlide()}
    </div>
  );
}

export default Slide;
