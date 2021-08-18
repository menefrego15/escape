import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Welcome from "./Pages/Welcome/Welcome";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
