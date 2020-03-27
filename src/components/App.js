import React, { Component } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Details />
      </div>
    );
  }
}

export default App;
