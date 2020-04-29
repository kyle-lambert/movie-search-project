import React from "react";
import styled from "styled-components";

import { truncateStr, filterGenres } from "../helpers";
import colors from "../styles/colors";

const Wrapper = styled.div`
  .heading,
  .subheading {
    margin: 0.5rem 0;
  }

  .heading {
    color: inherit;
    font-weight: 600;
    font-size: 1.7rem;
  }
  .subheading {
    color: ${colors.lightMetalGrey};
    font-size: 1.5rem;
  }
`;
const CardInner = styled.div`
  position: relative;
  z-index: 10;
  overflow: hidden;
  display: inline-block;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2px;
    background-color: ${colors.smurfBlueTransparent};
    opacity: 0;
    transition: opacity 200ms ease;
  }

  :hover::after {
    opacity: 1;
    transition: opacity 200ms ease;
  }

  .image {
    max-width: 100%;
    display: block;
    border-radius: 2px;
  }
`;

const NoImage = styled.div`
  background-color: orange;
`;

function MovieCard({ movie, index, genres }) {
  const { title, poster_path, genre_ids } = movie;
  return (
    <Wrapper>
      <CardInner>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title && title}
            className="image"
          />
        ) : (
          <NoImage>No Image</NoImage>
        )}
      </CardInner>
      <p className="subheading">{filterGenres(genres, genre_ids)}</p>
      <p className="heading">{title ? truncateStr(title, 30) : "No title"}</p>
    </Wrapper>
  );
}

export default MovieCard;
