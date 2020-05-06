import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getDailyTrendingMovies,
  getWeeklyTrendingMovies,
} from "../../store/actions/movieActions";

import SectionHeader from "../SectionHeader";
import Movies from "../Movies";
import Section from "../../styles/components/Section";
import Slider from "../Slider";

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

class Homepage extends Component {
  componentDidMount() {
    if (this.props.movies.dailyTrending.length < 1) {
      this.props.getDailyTrendingMovies();
    }
  }

  render() {
    const { movies, loading, errors } = this.props;
    return (
      <>
        <Section light>
          <SectionHeader
            heading="Trending Movies to watch now"
            subheading="Most watched movies by the day"
          />
          <Movies
            moviesLoading={loading.dailyTrendingMoviesLoading}
            moviesError={errors.dailyTrendingMoviesError}
            movies={movies.dailyTrending}
          />
        </Section>
        {/* <Slider slides={data} /> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    loading: state.loading,
    errors: state.errors,
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
