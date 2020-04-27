import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
} from "../../store/actions/movieActions";
import {
  getPopularTV,
  getOnTheAirTV,
  getTopRatedTV,
} from "../../store/actions/tvActions";

import "./Homepage.css";

class Homepage extends Component {
  componentDidMount() {
    this.init();
  }

  init = () => {
    const {
      getPopularMovies,
      getNowPlayingMovies,
      getTopRatedMovies,
      getPopularTV,
      getOnTheAirTV,
      getTopRatedTV,
    } = this.props;

    getPopularMovies();
    getNowPlayingMovies();
    getTopRatedMovies();
    getPopularTV();
    getOnTheAirTV();
    getTopRatedTV();
  };

  render() {
    return (
      <div className="Homepage">
        <h1>Homepage</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    tv: state.tv,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularMovies: () => dispatch(getPopularMovies()),
    getNowPlayingMovies: () => dispatch(getNowPlayingMovies()),
    getTopRatedMovies: () => dispatch(getTopRatedMovies()),
    getPopularTV: () => dispatch(getPopularTV()),
    getOnTheAirTV: () => dispatch(getOnTheAirTV()),
    getTopRatedTV: () => dispatch(getTopRatedTV()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
