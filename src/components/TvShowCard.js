import React from "react";
import styled from "styled-components";

import { truncateStr, filterGenres } from "../helpers";
import colors from "../styles/colors";

const Wrapper = styled.div`
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 300ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => `${props.index * 100}ms`};
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
    object-fit: cover;
    display: block;
    border-radius: 2px;
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

function TvShowCard({ show, index, genres }) {
  const { name, poster_path, genre_ids } = show;
  return (
    <Wrapper index={index}>
      <CardInner>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={name && name}
            className="image"
          />
        ) : (
          <NoImage>No Image</NoImage>
        )}
      </CardInner>
      <p className="subheading">{filterGenres(genres, genre_ids)}</p>
      <p className="heading">{name ? truncateStr(name, 30) : "No title"}</p>
    </Wrapper>
  );
}

export default TvShowCard;
