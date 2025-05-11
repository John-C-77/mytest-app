import Detail from "./routes/Detail";
import Home from "./routes/Home";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return(
  <Router>
    <Switch>

      <Route path="/hello">
      <h1>hello</h1>
        </Route>

      <Route path="/movie/:id">
        <Detail/>
      </Route>
      
      <Route path="/">
        <Home></Home>
      </Route>
    
    </Switch>
  </Router>);
}

export default App;
