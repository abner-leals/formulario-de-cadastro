import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "../Pages/Cadastro";
import Home from "../Pages/Home";

export default function Rotas() {
  return (
    <Switch>
      <Route exact path="/">
        <Form />
      </Route>
      <Route exact path="/success/:id">
        <Home />
      </Route>
    </Switch>
  );
}
