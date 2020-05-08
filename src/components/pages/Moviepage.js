import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  getMovieDetails,
  resetMovieDetails,
} from "../../store/actions/movieDetailsActions";
import {
  guardCredits,
  guardSimilar,
  guardRecommendations,
} from "../../utils/guards";
import LoadingScreen from "../LoadingScreen";
import Hero from "../Hero";
import HeadingGroup from "../HeadingGroup";
import ButtonGroup from "../ButtonGroup";
import Carousel from "../Carousel";
import ContentError from "../ContentError";

import SectionSpacer from "../../styles/components/SectionSpacer";

import sizes from "../../styles/sizes";
import colors from "../../styles/colors";

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

  getSubheading = (activeTab) => {
    switch (activeTab) {
      case "cast":
        return "Explore the top billed Actors...";
      case "crew":
        return "Discover the production team...";
      default:
        return "No subheading";
    }
  };

  carouselShouldRender = (type) => {
    const { results } = this.props.movieDetails;
    const { activeTab } = this.state;
    switch (type) {
      case "credits":
        return guardCredits(results, activeTab);
      case "similar":
        return guardSimilar(results);
      case "recommendations":
        return guardRecommendations(results);
      default:
        console.log("default");
        return false;
    }
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
    if (error) return <div>error screen</div>;
    return (
      <Wrapper>
        <Hero content={this.getHeroProps(results)} goBack={this.goBack} />
        <section className="section credits">
          <div className="credits-head">
            <HeadingGroup
              heading={activeTab[0].toUpperCase() + activeTab.slice(1)}
              subheading={this.getSubheading(activeTab)}
            />
            <ButtonGroup
              changeTab={this.changeTab}
              activeTab={activeTab}
              tabs={["cast", "crew"]}
            />
          </div>
          {this.carouselShouldRender("credits") ? (
            <Carousel
              accentColor={colors.supeDooperNavy}
              content={results.credits[activeTab]}
              type="person"
            />
          ) : (
            <ContentError
              minHeight={300}
              message={`Bummer, we couldn't find any information about the ${activeTab}.`}
            />
          )}
        </section>
        <section className="section">
          <HeadingGroup
            heading="Similar"
            subheading="A collection of movies based on your current selection..."
          />
          {this.carouselShouldRender("similar") ? (
            <Carousel
              accentColor={colors.royalNavyBlue}
              content={results.similar.results}
              type="movie"
            />
          ) : (
            <ContentError
              minHeight={300}
              message={`Sorry about that! We couldn't seem to find any similar movies for you.`}
            />
          )}
        </section>
        <SectionSpacer />
        <section className="section">
          <HeadingGroup
            heading="Recommendations"
            subheading="Most recommended movies based on your current selection!"
          />
          {this.carouselShouldRender("recommendations") ? (
            <Carousel
              accentColor={colors.royalNavyBlue}
              content={results.recommendations.results}
              type="movie"
            />
          ) : (
            <ContentError
              minHeight={300}
              message={`Ah, bummer! We couldn't find any recommendations for you.`}
            />
          )}
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
  .credits {
    background-color: ${colors.supeDooperNavy};

    .credits-head {
      display: flex;
      flex-direction: column-reverse;

      @media screen and (min-width: ${sizes.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
  }
`;

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
