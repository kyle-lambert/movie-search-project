import React, { Component } from "react";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import DetailsContainer from "./components/DetailsContainer/DetailsContainer";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route
            exact
            path="/details/:media_type/:id"
            component={DetailsContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
