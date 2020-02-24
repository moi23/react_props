import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/";
import Contact from "./pages/contact";
import QuemSomos from "./pages/quem_somos";

var Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/QuemSomos" component={QuemSomos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
