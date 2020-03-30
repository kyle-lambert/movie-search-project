import React, { Component } from "react";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TV from "./pages/TV";
import { Switch, Route } from "react-router-dom";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/movie/:id"
            render={routeProps => <Movie routeProps={routeProps} />}
          />
          <Route
            exact
            path="/tv/:id"
            render={routeProps => <TV routeProps={routeProps} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
