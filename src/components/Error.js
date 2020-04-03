import React, { Component } from "react";
import "../css/Error.css";

class Error extends Component {
  render() {
    return <div className="Error">{this.props.message}</div>;
  }
}

export default Error;
