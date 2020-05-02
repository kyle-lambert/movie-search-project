import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Moviepage from "./components/pages/Moviepage";
import Tvpage from "./components/pages/Tvpage";
import Personpage from "./components/pages/Personpage";
import Errorpage from "./components/pages/Errorpage";

const renderMatchedPage = (type, id) => {
  type = type.trim().toLowerCase();
  switch (type) {
    case "movie":
      return <Moviepage movieId={id} />;
    case "tv":
      return <Tvpage tvId={id} />;
    case "person":
      return <Personpage personId={id} />;
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
        render={(routeProps) =>
          renderMatchedPage(
            routeProps.match.params.type,
            routeProps.match.params.id
          )
        }
      />
      <Route component={Errorpage} />
    </Switch>
  );
};

export default App;
