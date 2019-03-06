import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Projects from "./pages/ProjectsPage";
import Favorites from "./pages/FavoritesPage";
import AllProjects from "./pages/AllProjectsPage";
import NoMatch from "./components/NoMatch";


const ReactRouter = () => {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/favorites" component={Favorites}/>
                    <Route path="/all-projects" component={AllProjects}/>
                    <Route component={NoMatch}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }

export default ReactRouter;
