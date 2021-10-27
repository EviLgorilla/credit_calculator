import { createBrowserHistory } from "history";
import React from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { routes } from "./routes";

const customHistory = createBrowserHistory();

function App() {
    return (
        <Router history={ customHistory }>
            <MainLayout>
                <Switch>
                    { routes.map(route => (
                        <Route exact path={ route.path } key={ route.id }>
                            { route.component }
                        </Route>
                    )) }
                </Switch>
            </MainLayout>
        </Router>
    );
}

export default App;
