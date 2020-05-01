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

import SectionHeader from "../SectionHeader";
import Movies from "../Movies";
import TvShows from "../TvShows";
import Section from "../../styles/components/Section";
import HeroDisplay from "../HeroDisplay";

class Homepage extends Component {
  componentDidMount() {
    this.init();
  }

  init = () => {
    const {
      getPopularMovies,
      getTopRatedMovies,
      getNowPlayingMovies,
      getDailyTrendingMovies,
      getWeeklyTrendingMovies,
      getMovieGenres,
    } = this.props;
    getPopularMovies();
    getTopRatedMovies();
    getNowPlayingMovies();
    getDailyTrendingMovies();
    getWeeklyTrendingMovies();
    getMovieGenres();
  };

  render() {
    return (
      <>
        <div>homepage</div>
        {/* <HeroDisplay items={tv_daily} />
        <Section light>
          <SectionHeader
            heading="Trending Movies to watch now"
            subheading="Most watched movies by the day"
          />
          <Movies genres={movie} movies={movie_daily} />
        </Section>
        <Section>
          <SectionHeader
            heading="Trending TV shows currently airing"
            subheading="Most watched TV shows by the day"
          />
          <TvShows genres={tv} shows={tv_daily} />
        </Section> */}
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
    getMovieGenres: () => dispatch(getMovieGenres()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
