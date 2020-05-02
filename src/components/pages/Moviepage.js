import React, { Component } from "react";

class Moviepage extends Component {
  render() {
    return (
      <>
        <div>movie page</div>
        <div>id: {this.props.movieId}</div>
      </>
    );
  }
}

export default Moviepage;
