import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import ToDo from "./components/todolist";

const App = () => {
  return (
    <div className="App-Main">
      <Switch>
        <Route path="/todo">
          <ToDo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
