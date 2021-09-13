import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Newplace from "./places/pages/NewPlaces";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        <Users />
        </Route>
        <Route path="/places/new">
          <Newplace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
