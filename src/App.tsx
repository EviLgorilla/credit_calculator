import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { MainLayout } from "./layouts/main-layout";

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <div>bank page</div>
          </Route>
          <Route path="/credit">
            <div>credit calculator page</div>
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
