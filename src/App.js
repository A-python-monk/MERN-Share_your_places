import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Newplace from "./places/pages/NewPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/UIComponents/Navigation/MainNavigation";
import Authorise from "./user/pages/auth";
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
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Route path="/auth" exact>
          <Authorise/>
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
};

export default App;
