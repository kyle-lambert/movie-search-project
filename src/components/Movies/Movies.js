import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import NetworkError from "../NetworkError/NetworkError";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useSpring, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";

import "./Movies.css";

function Movies({ popular }) {
  return (
    <div className="Movies">
      {popular &&
        popular
          .slice(0, 14)
          .map((movie, index) => (
            <MovieCard key={uuidv4()} movie={movie} index={index} />
          ))}
    </div>
  );
}

export default Movies;
