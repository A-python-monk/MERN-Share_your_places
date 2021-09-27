import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Newplace from "./places/pages/NewPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import UserPlaces from "./places/pages/UserPlaces";
import AuthContext from "./shared/components/context/auth-context";
import MainNavigation from "./shared/components/UIComponents/Navigation/MainNavigation";
import Authorise from "./user/pages/auth";
import Users from "./user/pages/Users";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = useCallback(() => {
    setisLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setisLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userid/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new">
          <Newplace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userid/places" exact>
          <UserPlaces />
        </Route>

        <Route path="/auth" exact>
          <Authorise />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Switch> {routes}</Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
