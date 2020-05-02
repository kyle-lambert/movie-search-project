import React, { Component } from "react";

class Personpage extends Component {
  render() {
    return (
      <>
        <div>person page</div>
        <div>id: {this.props.personId}</div>
      </>
    );
  }
}

export default Personpage;
