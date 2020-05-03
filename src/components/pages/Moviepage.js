import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  getMovieDetails,
  resetMovieDetails,
} from "../../store/actions/movieDetailsActions";

class Moviepage extends Component {
  componentDidMount() {
    this.props.getMovieDetails(this.props.movieId);
  }

  componentWillUnmount() {
    this.props.resetMovieDetails();
  }

  render() {
    const { results, loading, error } = this.props.movieDetails;

    if (loading) return <div>loading</div>;
    return (
      <>
        <div>{results.title}</div>
        <div>id: {results.id}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
    resetMovieDetails: () => dispatch(resetMovieDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Moviepage);
