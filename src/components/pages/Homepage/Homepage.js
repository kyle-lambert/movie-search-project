import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
} from "../../../store/actions/movieActions";
import {
  getPopularTV,
  getOnTheAirTV,
  getTopRatedTV,
} from "../../../store/actions/tvActions";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Movies from "../../Movies/Movies";

import "./Homepage.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
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
    const { results } = this.props.movies.popular;

    return (
      <div className="Homepage">
        <section className="Homepage-section">
          <SectionHeader
            title="Popular Movies to Watch Now"
            sub="Most watched movies by day"
          />
          <Movies popular={results} />
        </section>
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
