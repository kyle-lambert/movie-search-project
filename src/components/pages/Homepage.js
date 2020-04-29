import React, { Component } from "react";
import { connect } from "react-redux";

import { getMovieGenres, getTvGenres } from "../../store/actions/genreActions";
import {
  getDailyTrendingMovies,
  getDailyTrendingTv,
} from "../../store/actions/trendActions";

import SectionHeader from "../SectionHeader";
import Movies from "../Movies";
import TvShows from "../TvShows";
import Section from "../../styles/components/Section";
import Navbar from "../Navbar";

class Homepage extends Component {
  componentDidMount() {
    this.init();
  }

  init = () => {
    const {
      getMovieGenres,
      getTvGenres,
      getDailyTrendingMovies,
      getDailyTrendingTv,
    } = this.props;
    getMovieGenres();
    getTvGenres();
    getDailyTrendingMovies();
    getDailyTrendingTv();
  };

  render() {
    const { movie_daily, tv_daily } = this.props.trending;
    const { movie, tv } = this.props.genres;
    return (
      <>
        <Navbar />
        <Section>
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
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
    trending: state.trending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieGenres: () => dispatch(getMovieGenres()),
    getTvGenres: () => dispatch(getTvGenres()),
    getDailyTrendingMovies: () => dispatch(getDailyTrendingMovies()),
    getDailyTrendingTv: () => dispatch(getDailyTrendingTv()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
