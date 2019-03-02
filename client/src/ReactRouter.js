import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import NoMatch from "./components/NoMatch";

const ReactRouter = () => {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/projects" component={ProjectsPage}/>
                    {/*<Route path="/favorites" component={Favorites}/> */}
                    <Route component={NoMatch}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }

export default ReactRouter;
