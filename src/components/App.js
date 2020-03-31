import React, { Component } from "react";
import Movie from "./pages/Movie";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />
      </div>
    );
  }
}

export default App;
