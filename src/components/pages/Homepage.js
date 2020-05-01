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
import HeroDisplay from "../HeroDisplay";

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
