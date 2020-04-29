import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import MovieCard from "./MovieCard";
import Error from "./Error";

const Grid = styled.div`
  display: grid;
  gap: 2rem;
`;

function Movies({ genres, movies }) {
  return movies ? (
    <Grid>
      {movies.map((movie, index) => (
        <MovieCard key={uuidv4()} movie={movie} index={index} genres={genres} />
      ))}
    </Grid>
  ) : (
    <Error message="Sorry, we couldn't find any movies for you..." />
  );
}
export default Movies;
