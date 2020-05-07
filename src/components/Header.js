import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";
import sizes from "../styles/sizes";
import Rating from "../components/Rating";

function Header({
  title,
  overview,
  genres,
  voteAverage,
  voteCount,
  tagline,
  releaseDate,
}) {
  const getGenres = () => {
    if (!genres) return "No genres available";
    return genres.map((genre) => genre.name).join(", ");
  };

  const getReleaseYear = () => {
    if (!releaseDate) return null;
    return `(${releaseDate.slice(0, 4)})`;
  };

  return (
    <Wrapper>
      <Title>
        {title ? title : "No title"}
        <span className="release-year">{getReleaseYear()}</span>
      </Title>
      <Genres>{getGenres()}</Genres>
      <div className="rating-container">
        <Rating voteAverage={voteAverage} voteCount={voteCount} />
      </div>
      <Tagline>{tagline ? `"${tagline}"` : null}</Tagline>
      <Overview>{overview ? overview : null}</Overview>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  flex-grow: 1;
  align-self: flex-end;

  .rating-container {
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: ${sizes.tablet}) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  color: inherit;
  font-size: 3.6rem;
  margin-bottom: 1rem;

  .release-year {
    margin-left: 1rem;
    font-size: 2.8rem;
    color: ${colors.lightGrey};
  }
`;

const Genres = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  color: ${colors.lightMetalGrey};
`;

const Tagline = styled.p`
  font-style: italic;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  padding: 0 1rem;
  color: ${colors.lightGrey};
`;

const Overview = styled.p`
  font-size: 1.8rem;

  @media screen and (min-width: ${sizes.laptop}) {
    width: 80%;
  }
`;

export default Header;
