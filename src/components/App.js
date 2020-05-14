import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomeContainer from "../components/pages/HomeContainer";
import MovieContainer from "../components/pages/MovieContainer";
import TVContainer from "../components/pages/TVContainer";
import PersonContainer from "../components/pages/PersonContainer";
import Error from "../components/pages/Error";

const renderMatchedPage = (routeProps) => {
  const type = routeProps.match.params.type.trim().toLowerCase();
  const id = routeProps.match.params.id;
  const history = routeProps.history;

  switch (type) {
    case "movie":
      return <MovieContainer contentId={id} history={history} />;
    case "tv":
      return <TVContainer contentId={id} history={history} />;
    case "person":
      return <PersonContainer contentId={id} history={history} />;
    default:
      return <Error />;
  }
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route
        exact
        path="/details/:type/:id"
        render={(routeProps) => renderMatchedPage(routeProps)}
      />
      <Route exact path="/404" component={Error} />
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default App;
