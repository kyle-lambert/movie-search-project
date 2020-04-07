import React, { Component } from "react";
import Details from "../Details/Details";

class DetailsContainer extends Component {
  render() {
    const { id, media_type } = this.props.match.params;
    return <Details id={id} media_type={media_type} />;
  }
}

export default DetailsContainer;
