import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Feed />
      </Route>
      <Route path="/explore">
        <Explore />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/:username">
        <Profile />
      </Route>
    </Switch>
  );
};

const LoggedOutRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
    </Switch>
  );
};

const AppRouter = ({ isLoggedIn }) => {
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

export default AppRouter;
