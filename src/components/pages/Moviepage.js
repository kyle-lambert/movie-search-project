import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  getMovieDetails,
  resetMovieDetails,
} from "../../store/actions/movieDetailsActions";
import LoadingScreen from "../LoadingScreen";
import Hero from "../Hero";

class Moviepage extends Component {
  componentDidMount() {
    this.props.getMovieDetails(this.props.movieId);
  }

  componentWillUnmount() {
    this.props.resetMovieDetails();
  }

  goBack = () => {
    this.props.history.goBack();
  };

  getHeroProps = (results) => {
    return {
      backdropPath: results.backdrop_path ? results.backdrop_path : null,
      title: results.title ? results.title : null,
      posterPath: results.poster_path ? results.poster_path : null,
      genres: results.genres ? results.genres : [],
      voteAverage: results.vote_average ? results.vote_average : null,
      voteCount: results.vote_count ? results.vote_count : null,
      tagline: results.tagline ? results.tagline : null,
      releaseDate: results.release_date ? results.release_date : null,
      overview: results.overview ? results.overview : null,
    };
  };

  getSummaryProps = (results) => {
    return {
      overview: results.overview ? results.overview : null,
      releaseDate: results.release_date ? results.release_date : null,
      runtime: results.runtime ? results.runtime : null,
      status: results.status ? results.status : null,
      budget: results.budget ? results.budget : null,
      revenue: results.revenue ? results.revenue : null,
      tagline: results.tagline ? results.tagline : null,
    };
  };

  render() {
    const { results, loading, error } = this.props.movieDetails;

    if (loading) return <LoadingScreen />;
    return (
      <Wrapper>
        <Hero content={this.getHeroProps(results)} goBack={this.goBack} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

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
