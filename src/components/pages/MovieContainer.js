import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getMovieDetails,
  resetMovieDetails,
} from "../../store/actions/movieDetailsActions";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import Movie from "../Movie/Movie";

class MovieContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovieDetails(this.props.contentId);
  }

  componentWillUnmount() {
    this.props.resetMovieDetails();
  }

  render() {
    const { loading, error, data } = this.props.movieDetails;
    if (loading) return <LoadingScreen />;
    if (error) return <ErrorScreen />;
    return <Movie data={data} history={this.props.history} />;
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (contentId) => dispatch(getMovieDetails(contentId)),
    resetMovieDetails: () => dispatch(resetMovieDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
