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
<<<<<<< HEAD
                    <Route path="/home" component={Home} />
=======
                    <Route path="/home" component={Home}/>
>>>>>>> 7fa2ce51b2980b40b94429c4559ff83dadc10ddf
                    <Route component={NoMatch}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }

export default ReactRouter;