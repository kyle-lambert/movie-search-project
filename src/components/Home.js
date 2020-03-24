import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieSection from "./MovieSection";
const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends Component {
  static defaultProps = {
    filterTypes: ["upcoming", "top_rated", "popular", "now_playing"]
  };
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        upcoming: [],
        top_rated: [],
        popular: [],
        now_playing: [],
        currentFilter: "upcoming"
      }
    };
    this.filterMovies = this.filterMovies.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.props.filterTypes.map(type => this.getMovies(type));
  }

  async getMovies(type) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      if (data) {
        this.setState(state => ({
          movies: {
            ...state.movies,
            [type]: data.results
          }
        }));
      } else {
        console.log("Problem with movie request");
      }
    } catch (error) {
      console.log(error);
    }
  }

  filterMovies(e) {
    const type = e.target.name;
    this.setState(state => ({
      movies: {
        ...state.movies,
        currentFilter: type
      }
    }));
  }

  render() {
    return (
      <div className="Home">
        <Navbar />
        <MovieSection
          movies={this.state.movies}
          filterMovies={this.filterMovies}
          filterTypes={this.props.filterTypes}
        />
      </div>
    );
  }
}

export default Home;

// async getTrending(type) {
//   const url = `https://api.themoviedb.org/3/trending/${type}/week?api_key=${API_KEY}`;
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     if (data) {
//       this.setState({ [type]: data.results });
//     } else {
//       console.log("Problem with movie request");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
