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
  componentDidMount() {
    this.props.resetMovieDetails();
    this.props.getMovieDetails(this.props.contentId);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.routeProps.match.params.id !==
      nextProps.routeProps.match.params.id
    ) {
      this.props.resetMovieDetails();
      this.props.getMovieDetails(nextProps.routeProps.match.params.id);
    }
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
