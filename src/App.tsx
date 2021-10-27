import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { routes } from "./routes";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    { routes.map(route => (
                        <Route exact path={ route.path } key={ route.id }>
                            { route.component }
                        </Route>
                    )) }
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
