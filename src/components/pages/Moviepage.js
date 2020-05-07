import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  getMovieDetails,
  resetMovieDetails,
} from "../../store/actions/movieDetailsActions";
import LoadingScreen from "../LoadingScreen";
import Hero from "../Hero";
import Credits from "../Credits";

class Moviepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "cast",
    };
  }

  componentDidMount() {
    this.props.getMovieDetails(this.props.movieId);
  }

  componentWillUnmount() {
    this.props.resetMovieDetails();
  }

  goBack = () => {
    this.props.history.goBack();
  };

  changeTab = (name) => {
    this.setState({ activeTab: name });
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

  render() {
    const { results, loading, error } = this.props.movieDetails;
    const { activeTab } = this.state;

    if (loading) return <LoadingScreen />;
    return (
      <Wrapper>
        <Hero content={this.getHeroProps(results)} goBack={this.goBack} />
        <Credits
          activeTab={activeTab}
          changeTab={this.changeTab}
          cast={results.credits.cast}
          crew={results.credits.crew}
        />
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
