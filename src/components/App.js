import React, { Component } from "react";
import Home from "./Home";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Details type="tv" />
      </div>
    );
  }
}

export default App;
