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
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { Transition } from "react-spring/renderprops";

import "./Homepage.css";
import MovieCard from "../../MovieCard/MovieCard";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    const { results, isLoading, networkError } = this.props.movies.popular;
    return (
      <div className="Homepage">
        <section className="Homepage-section">
          <SectionHeader
            title="Popular Movies to Watch Now"
            sub="Most watched movies by day"
          />
          <Transition
            items={isLoading}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
            {(isLoading) =>
              isLoading
                ? (props) => <LoadingSpinner style={props} />
                : (props) => <Movies style={props} popular={results} />
            }
          </Transition>
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
