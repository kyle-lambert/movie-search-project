import React, { Component } from "react";
import Details from "./Details";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Details type="tv" />
      </div>
    );
  }
}

export default App;
