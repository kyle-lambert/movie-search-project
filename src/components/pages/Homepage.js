import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getDailyTrendingMovies,
  getWeeklyTrendingMovies,
  getMovieGenres,
} from "../../store/actions/movieActions";

import {
  getPopularTv,
  getTopRatedTv,
  getOnTheAirTv,
  getDailyTrendingTv,
  getWeeklyTrendingTv,
  getTvGenres,
} from "../../store/actions/tvActions";

import SectionHeader from "../SectionHeader";
import Movies from "../Movies";
import TvShows from "../TvShows";
import Section from "../../styles/components/Section";

class Homepage extends Component {
  componentDidMount() {
    this.init();
  }

  init = () => {
    this.props.getPopularMovies();
    this.props.getTopRatedMovies();
    this.props.getNowPlayingMovies();
    this.props.getDailyTrendingMovies();
    this.props.getWeeklyTrendingMovies();
    this.props.getMovieGenres();
    this.props.getPopularTv();
    this.props.getTopRatedTv();
    this.props.getOnTheAirTv();
    this.props.getDailyTrendingTv();
    this.props.getWeeklyTrendingTv();
    this.props.getTvGenres();
  };

  render() {
    const { movies, loading } = this.props;
    return (
      <>
        <Section light>
          <SectionHeader
            heading="Trending Movies to watch now"
            subheading="Most watched movies by the day"
          />
          <Movies
            movieGenres={movies.genres}
            moviesLoading={loading.dailyTrendingMoviesLoading}
            movies={movies.dailyTrending}
          />
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    tv: state.tv,
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
    getMovieGenres: () => dispatch(getMovieGenres()),
    getPopularTv: () => dispatch(getPopularTv()),
    getTopRatedTv: () => dispatch(getTopRatedTv()),
    getOnTheAirTv: () => dispatch(getOnTheAirTv()),
    getDailyTrendingTv: () => dispatch(getDailyTrendingTv()),
    getWeeklyTrendingTv: () => dispatch(getWeeklyTrendingTv()),
    getTvGenres: () => dispatch(getTvGenres()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
