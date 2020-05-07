import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { truncateStr, filterGenres } from "../helpers";
import colors from "../styles/colors";

const Wrapper = styled.div`
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 300ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => `${props.index * 125}ms`};

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
  cursor: pointer;

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
    object-fit: cover;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const NoImage = styled.div`
  background-color: orange;
`;

function MovieCard({ movie, index }) {
  const { title, poster_path, id } = movie;
  return (
    <Wrapper index={index}>
      <Link to={`/details/movie/${id}`}>
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
      </Link>
      <p className="subheading">{filterGenres("movie", movie.genre_ids)}</p>
      <p className="heading">{title ? truncateStr(title, 30) : "No title"}</p>
    </Wrapper>
  );
}

export default MovieCard;
