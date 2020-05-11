import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import sizes from "../../styles/sizes";
import colors from "../../styles/colors";

import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getDailyTrendingMovies,
  getWeeklyTrendingMovies,
} from "../../store/actions/movieActions";

import HeadingGroup from "../HeadingGroup";
import Carousel from "../Carousel";
import ContentError from "../ContentError";
import ContentLoading from "../ContentLoading";
import SectionSpacer from "../../styles/components/SectionSpacer";
import ButtonGroup from "../ButtonGroup";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "movie",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getPopularMovies();
      this.props.getTopRatedMovies();
      this.props.getNowPlayingMovies();
    }, 2500);
  }

  carouselJSX = (type) => {
    const { movies } = this.props;
    const { activeTab } = this.state;

    if (activeTab === "movie") {
      if (movies[type].loading) return <ContentLoading minHeight={300} />;
      if (movies[type].error) return <ContentError minHeight={300} />;
      return (
        <Carousel
          accentColor={colors.royalNavyBlue}
          content={movies[type].data}
          type="movie"
        />
      );
    } else if (activeTab === "tv") {
    } else {
    }
  };

  render() {
    const { movies } = this.props;
    const { activeTab } = this.state;
    return (
      <Wrapper>
        <section className="section">
          <div className="section-head">
            <HeadingGroup
              heading="Discover"
              subheading="Browse a collection of the latest and greatest movies."
            />
            <ButtonGroup activeTab={activeTab} tabs={["movies", "tv shows"]} />
          </div>

          <div className="showcase">
            <HeadingGroup heading="Popular" />
            {this.carouselJSX("popular")}
          </div>
          <SectionSpacer />
          <div className="showcase">
            <HeadingGroup heading="Top Rated" />
            {this.carouselJSX("topRated")}
          </div>
          <SectionSpacer />
          <div className="showcase">
            <HeadingGroup heading="Now Playing" />
            {this.carouselJSX("nowPlaying")}
          </div>
        </section>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .section {
    padding: 3rem;
    width: 100%;

    @media screen and (min-width: ${sizes.tablet}) {
      padding: 4rem 6rem;
    }

    @media screen and (min-width: ${sizes.laptop}) {
      padding: 4rem 9rem;
    }
  }

  .showcase {
    padding: 2rem 0;
  }
`;

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularMovies: () => dispatch(getPopularMovies()),
    getTopRatedMovies: () => dispatch(getTopRatedMovies()),
    getNowPlayingMovies: () => dispatch(getNowPlayingMovies()),
    getDailyTrendingMovies: () => dispatch(getDailyTrendingMovies()),
    getWeeklyTrendingMovies: () => dispatch(getWeeklyTrendingMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

const data = [
  {
    id: 0,
    image:
      "https://image.tmdb.org/t/p/original/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
  },
  {
    id: 1,
    image:
      "https://image.tmdb.org/t/p/original/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg",
  },
  {
    id: 2,
    image:
      "https://image.tmdb.org/t/p/original/ygCVyAfj3xFu1lzma3QUftAttEb.jpg",
  },
];
