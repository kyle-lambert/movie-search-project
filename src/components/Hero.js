import React from "react";
import styled from "styled-components";

import sizes from "../styles/sizes";

import backgroundGradient from "../images/background-gradient.jpg";
import Poster from "./Poster";
import Header from "./Header";
import BackButton from "./BackButton";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  z-index: 5;

  ::after {
    content: "";
    background-image: linear-gradient(
      rgba(27, 38, 49, 0.5) 0,
      rgba(27, 38, 49, 1) 95%
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
`;

const Inner = styled.div`
  padding: 3rem;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 15;

  .head {
    margin-bottom: 3rem;
  }

  .body {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: ${sizes.tablet}) {
    padding: 4rem 6rem;
  }

  @media screen and (min-width: ${sizes.laptop}) {
    padding: 4rem 9rem;
  }
`;

function Hero({ content, goBack }) {
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
      <Inner>
        <div className="head">
          <BackButton goBack={goBack} />
        </div>
        <div className="body">
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
      </Inner>
    </Wrapper>
  );
}

export default Hero;
