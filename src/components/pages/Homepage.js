import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getMovieGenres, getTvGenres } from "../../store/actions/genreActions";
import {
  getDailyTrendingMovies,
  getDailyTrendingTv,
} from "../../store/actions/trendActions";
import colors from "../../styles/colors";
import SectionHeader from "../SectionHeader";
import Movies from "../Movies";

const Wrapper = styled.div``;
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${(props) =>
    props.light ? colors.pureWhite : colors.royalNavyBlue};
  color: ${(props) => (props.light ? colors.royalNavyBlue : colors.pureWhite)};
`;

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
      <Wrapper>
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
          {/* <Movies genres={movie} movies={movie_daily} /> */}
        </Section>
      </Wrapper>
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
