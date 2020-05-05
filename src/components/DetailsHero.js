import React from "react";
import styled from "styled-components";

import backgroundGradient from "../images/background-gradient.jpg";
import Poster from "./Poster";
import Header from "./Header";
import ResponsiveContainer from "../styles/components/ResponsiveContainer";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  z-index: 5;

  .inner {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    z-index: 15;

    .inner-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .inner-body {
      display: flex;
      align-items: center;
    }
  }

  ::after {
    content: "";
    background-color: rgba(27, 38, 49, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
`;

const BackButton = styled.button`
  display: inline;
  outline: none;
  border: none;
  color: white;
  font-size: inherit;
  background-color: transparent;
  padding: 1rem;
  cursor: pointer;
`;

function HeroHeader({ content }) {
  const {
    backdropPath,
    title,
    posterPath,
    overview,
    genres,
    voteAverage,
    voteCount,
    tagline,
    releaseDate,
  } = content;

  const backdropStyles = {
    backgroundImage: `url(${
      backdropPath
        ? `https://image.tmdb.org/t/p/original/${backdropPath}`
        : backgroundGradient
    })`,
  };

  return (
    <Wrapper style={backdropStyles}>
      <ResponsiveContainer>
        <div className="inner">
          <div className="inner-head">
            <BackButton>Back</BackButton>
          </div>
          <div className="inner-body">
            <Poster posterPath={posterPath} />
            <Header
              title={title}
              overview={overview}
              genres={genres}
              voteAverage={voteAverage}
              voteCount={voteCount}
              tagline={tagline}
              releaseDate={releaseDate}
            />
          </div>
        </div>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default HeroHeader;
