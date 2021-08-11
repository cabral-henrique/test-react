import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/index";
import ListUsers from "../Pages/ListUsers/index";

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list-users" component={ListUsers} />
      </Switch>
    </main>
  );
};

export default Routes;
