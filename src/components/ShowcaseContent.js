import React from "react";
import styled from "styled-components";

import colors from "../styles/colors";

import HeadingGroup from "./HeadingGroup";
import Carousel from "./Carousel";
import ContentError from "./ContentError";
import ContentLoading from "./ContentLoading";

function ShowcaseContent({ activeTab, changeTab, movies, tv }) {
  const carouselMovieJSX = () => {
    return (
      <>
        <Showcase>
          <HeadingGroup
            heading="Popular"
            subheading="Browse an up-to-date collection of the most popular movies."
          />
          {showMovieCarousel("popular")}
        </Showcase>

        <Showcase>
          <HeadingGroup
            heading="Top Rated"
            subheading="Discover the most highly rated movies of all-time."
          />
          {showMovieCarousel("topRated")}
        </Showcase>
        <Showcase>
          <HeadingGroup
            heading="Now Playing"
            subheading="Find out which movies are currently in cinemas."
          />
          {showMovieCarousel("nowPlaying")}
        </Showcase>
      </>
    );
  };

  const carouselTvJSX = () => {
    return (
      <>
        <Showcase>
          <HeadingGroup
            heading="Popular"
            subheading="Browse an up-to-date collection of the most popular televison shows."
          />
          {showTvCarousel("popular")}
        </Showcase>
        <Showcase>
          <HeadingGroup
            heading="Top Rated"
            subheading="Discover the most highly rated televison shows of all-time."
          />
          {showTvCarousel("topRated")}
        </Showcase>
        <Showcase>
          <HeadingGroup
            heading="On The Air"
            subheading="Find out which televison shows are currently airing."
          />
          {showTvCarousel("onTheAir")}
        </Showcase>
      </>
    );
  };

  const showMovieCarousel = (type) => {
    if (movies[type].loading) return <ContentLoading minHeight={300} />;
    if (movies[type].error)
      return (
        <ContentError
          minHeight={300}
          message="Oh no! We were unable to retieve these shows for you, sorry about that!"
        />
      );
    return (
      <Carousel
        accentColor={colors.BACKGROUND_PRIMARY}
        content={movies[type].data}
        type="movie"
      />
    );
  };

  const showTvCarousel = (type) => {
    if (tv[type].loading) return <ContentLoading minHeight={300} />;
    if (tv[type].error)
      return (
        <ContentError
          minHeight={300}
          message="Oh no! We were unable to retieve these shows for you, sorry about that!"
        />
      );
    return (
      <Carousel
        accentColor={colors.BACKGROUND_PRIMARY}
        content={tv[type].data}
        type="tv"
      />
    );
  };

  const handleClick = (e) => {
    changeTab(e.target.name);
  };
  return (
    <Wrapper>
      <ContentToggle>
        <button
          disabled={activeTab === "movie" ? true : false}
          onClick={handleClick}
          name="movie"
          className={`btn left ${activeTab === "movie" ? "active" : null}`}>
          Movies
        </button>
        <button
          disabled={activeTab === "tv" ? true : false}
          onClick={handleClick}
          name="tv"
          className={`btn right ${activeTab === "tv" ? "active" : null}`}>
          TV Shows
        </button>
      </ContentToggle>
      {activeTab === "movie" ? carouselMovieJSX() : carouselTvJSX()}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Showcase = styled.div`
  margin: 2.5rem 0;
`;

const ContentToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 2px;
  background-color: ${colors.BACKGROUND_SECONDARY};

  .btn {
    flex: 1;
    margin: 0 4px;
    padding: 0.8rem 1.4rem;
    font-size: 1.8rem;
    font-weight: 300;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${colors.TEXT_SECONDARY};
  }

  .left {
    text-align: right;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    :hover:enabled {
      background-image: linear-gradient(
        90deg,
        transparent,
        ${colors.BACKGROUND_PRIMARY}
      );
      color: ${colors.TEXT_PRIMARY_LIGHT};
    }
  }

  .right {
    text-align: left;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    :hover:enabled {
      background-image: linear-gradient(
        90deg,
        ${colors.BACKGROUND_PRIMARY},
        transparent
      );
      color: ${colors.TEXT_PRIMARY_LIGHT};
    }
  }

  .active {
    color: ${colors.TEXT_PRIMARY_DARK};
    font-weight: 600;
  }

  .left.active {
    background-image: linear-gradient(
      90deg,
      transparent,
      ${colors.BRAND_PRIMARY}
    );
  }

  .right.active {
    background-image: linear-gradient(
      90deg,
      ${colors.BRAND_PRIMARY},
      transparent
    );
  }
`;

export default ShowcaseContent;
