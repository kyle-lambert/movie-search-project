import React, { Component } from "react";
import Home from "./pages/Home";
// import Movie from "./pages/Movie";
// import TV from "./pages/TV";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        {/* <Movie /> */}
        {/* <TV /> */}
      </div>
    );
  }
}

export default App;
