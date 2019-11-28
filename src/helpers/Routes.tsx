import React from "react";
import Landing from "../pages/Landing/Landing";
import Showcase from "../pages/Showcase/Showcase";

import { Route, Switch } from "react-router";

export default function Routes() {
  return (
    <Switch>
      <Route path="/showcase" component={Showcase} />
      <Route component={Landing} />
    </Switch>
  );
}
