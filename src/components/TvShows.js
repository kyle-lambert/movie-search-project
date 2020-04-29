import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TvShowCard from "./TvShowCard";
import Error from "./Error";

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

function TvShows({ genres, shows }) {
  return shows ? (
    <Grid>
      {shows.slice(0, 10).map((show, index) => (
        <TvShowCard key={uuidv4()} show={show} index={index} genres={genres} />
      ))}
    </Grid>
  ) : (
    <Error message="Sorry, we couldn't find any movies for you..." />
  );
}
export default TvShows;
