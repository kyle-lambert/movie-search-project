import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Moviepage from "./components/pages/Moviepage";
import Tvpage from "./components/pages/Tvpage";
import Personpage from "./components/pages/Personpage";
import Errorpage from "./components/pages/Errorpage";

const renderMatchedPage = (routeProps) => {
  const type = routeProps.match.params.type.trim().toLowerCase();
  const id = routeProps.match.params.id;
  const history = routeProps.history;

  switch (type) {
    case "movie":
      return <Moviepage movieId={id} history={history} />;
    case "tv":
      return <Tvpage tvId={id} history={history} />;
    case "person":
      return <Personpage personId={id} history={history} />;
    default:
      return <Errorpage />;
  }
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route
        exact
        path="/details/:type/:id"
        render={(routeProps) => renderMatchedPage(routeProps)}
      />
      <Route exact path="/404" component={Errorpage} />
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default App;
