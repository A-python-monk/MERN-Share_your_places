import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Newplace from "./places/pages/NewPlaces";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/UIComponents/Navigation/MainNavigation";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Switch>
        <Route path="/" exact>
        <Users />
        </Route>
        <Route path="/:userid/places" exact>
          <UserPlaces/>
        </Route>
        <Route path="/places/new">
          <Newplace />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
};

export default App;
