import React, { Component } from "react";
import Navbar from "../Navbar";
// import Content from "../Content";
import "../../css/TV.css";
const API_KEY = process.env.REACT_APP_API_KEY;
const tv_id = 1399;

class TV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      if (data) {
        console.log(data);
        // setTimeout(() => {
        //   this.setState({ content: data, isLoading: false });
        // }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // buildState = data => {
  //   if (data) {
  //     const content = Object.keys(data).filter(
  //       key => data[key] === "backdrop_path" && data[key] === "poster_path"
  //     );
  //     return content.map(item => {
  //       return {
  //         title: item.name,
  //         backdrop_path: item.backdrop_path,
  //         genres: item.genres,
  //         id: item.id,
  //         overview: item.overview,
  //         poster_path: item.poster_path,
  //         number_of_seasons: item.number_of_seasons,
  //         number_of_episodes: item.number_of_episodes,
  //         networks: item.networks,
  //         vote_average: item.vote_average,
  //         vote_count: item.vote_count,
  //         popularity: item.popularity,
  //         production_companies: item.production_companies,
  //         seasons: item.seasons,
  //         first_air_date: item.first_air_date,
  //         episode_run_time: item.episode_run_time,
  //         created_by: item.created_by,
  //         origin_country: item.origin_country
  //       };
  //     });
  //   } else {
  //     return [];
  //   }
  // };

  render() {
    // const { isLoading, content } = this.state;

    return (
      <div className="TV">
        <Navbar />
        {/* {isLoading ? <div>LOADING</div> : <Content content={content} />} */}
      </div>
    );
  }
}

export default TV;
