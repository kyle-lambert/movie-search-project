import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import MovieCard from "./MovieCard";
import Error from "./Error";

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

function Movies({ moviesLoading, moviesError, movies }) {
  if (moviesLoading) return <div>loading</div>;
  if (moviesError) return <div>error</div>;
  return (
    <Grid>
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie, index) => (
          <MovieCard key={uuidv4()} movie={movie} index={index} />
        ))}
    </Grid>
  );
}
export default Movies;
