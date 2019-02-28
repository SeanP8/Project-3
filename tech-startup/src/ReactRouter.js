import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import NoMatch from "./components/NoMatch/NoMatch";

const ReactRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;
