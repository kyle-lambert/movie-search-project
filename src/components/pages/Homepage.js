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

import {
  getPopularTv,
  getTopRatedTv,
  getOnTheAirTv,
  getDailyTrendingTv,
  getWeeklyTrendingTv,
} from "../../store/actions/tvActions";

import ShowcaseContent from "../ShowcaseContent";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "movie",
    };
  }

  shouldFetchMovies = () => {
    const { movies } = this.props;
    return (
      movies.popular.data === null &&
      movies.topRated.data === null &&
      movies.nowPlaying.data === null
    );
  };

  shouldFetchTv = () => {
    const { tv } = this.props;
    return (
      tv.popular.data === null &&
      tv.topRated.data === null &&
      tv.onTheAir.data === null
    );
  };

  componentDidMount() {
    if (this.shouldFetchMovies()) {
      this.props.getPopularMovies();
      this.props.getTopRatedMovies();
      this.props.getNowPlayingMovies();
      console.log("fetched movies");
    }

    if (this.shouldFetchTv()) {
      this.props.getPopularTv();
      this.props.getTopRatedTv();
      this.props.getOnTheAirTv();
      console.log("fetched tv");
    }
  }

  changeTab = (name) => {
    this.setState({ activeTab: name });
  };

  render() {
    const { movies, tv } = this.props;
    const { activeTab } = this.state;
    return (
      <Wrapper>
        <section className="section">
          <ShowcaseContent
            activeTab={activeTab}
            changeTab={this.changeTab}
            movies={movies}
            tv={tv}
          />
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
    margin: 2rem 0;
  }
`;

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    tv: state.tv,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularMovies: () => dispatch(getPopularMovies()),
    getTopRatedMovies: () => dispatch(getTopRatedMovies()),
    getNowPlayingMovies: () => dispatch(getNowPlayingMovies()),
    getDailyTrendingMovies: () => dispatch(getDailyTrendingMovies()),
    getWeeklyTrendingMovies: () => dispatch(getWeeklyTrendingMovies()),
    getPopularTv: () => dispatch(getPopularTv()),
    getTopRatedTv: () => dispatch(getTopRatedTv()),
    getOnTheAirTv: () => dispatch(getOnTheAirTv()),
    getDailyTrendingTv: () => dispatch(getDailyTrendingTv()),
    getWeeklyTrendingTv: () => dispatch(getWeeklyTrendingTv()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
