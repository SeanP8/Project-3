import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/HomePage";
import NoMatch from "./components/NoMatch";

const ReactRouter = () => {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
<<<<<<< HEAD:client/src/ReactRouter.js
                    <Route path="/home" component={Home}/>
=======
>>>>>>> 31cc1b16149283448fa0890c92e326d1d21124ff:tech-startup/src/ReactRouter.js
                    <Route component={NoMatch}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }

export default ReactRouter;