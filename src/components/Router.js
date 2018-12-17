import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/recipe" component={Recipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;
