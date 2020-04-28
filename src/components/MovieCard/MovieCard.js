import React from "react";
import "./MovieCard.css";

function MovieCard({ movie: { poster_path, title, release_date }, index }) {
  return (
    <div className="MovieCard" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="MovieCard-inner">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className="MovieCard-img"
          />
        ) : (
          <div className="MovieCard-error">
            <p>No Image</p>
          </div>
        )}
        <p className="MovieCard-title">{title && title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
