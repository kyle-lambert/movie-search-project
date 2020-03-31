import React, { Component } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const id = 1399;
// const id = 69740;
// const id = 82856;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      isLoading: true,
      isError: false
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=credits,reviews`
        )
        .then(results => {
          this.setState({ results: results.data, isLoading: false });
        })
        .catch(error => {
          this.setState({ isError: true, isLoading: false });
        });
    }, 2000);
  }

  render() {
    const { results, isLoading, isError } = this.state;

    if (isError) {
      return <div>ERROR</div>;
    } else if (isLoading) {
      return <div>LOADING</div>;
    } else {
      return (
        <div>
          <h1>RESULTS</h1>
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
      );
    }
  }
}

export default Details;
