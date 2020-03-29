import React, { Component } from "react";
import TVLayout from "../TVLayout";
import "../../css/TV.css";
import { fetchData, buildCredits } from "../../utilities";
const API_KEY = process.env.REACT_APP_API_KEY;
// const tv_id = 1399;
// const tv_id = 69740;
// const tv_id = 82856;
const tv_id = 1402;

class TV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      credits: {},
      reviews: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    const details = await fetchData("tv", "details", tv_id, API_KEY);
    const credits = await fetchData("tv", "credits", tv_id, API_KEY);
    const reviews = await fetchData("tv", "reviews", tv_id, API_KEY);
    this.setState({
      details: details,
      credits: buildCredits(credits),
      reviews: reviews,
      isLoading: false
    });
  }

  render() {
    const { isLoading, details } = this.state;

    return (
      <div className="TV">
        {isLoading ? <div>LOADING</div> : <TVLayout details={details} />}
      </div>
    );
  }
}

export default TV;
