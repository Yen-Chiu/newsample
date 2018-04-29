import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Initial from "./components/Pages/Initial";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import List from "./components/Pages/List";
import Profile from "./components/Pages/Profile";
import Survey from "./components/Pages/Survey";
import FourBtn from "./components/Pages/FourBtn/FourBtn.js";

const App = () =>
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Initial} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/list" component={List} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/survey" component={Survey} />
      <Route exact path="/menu" component={FourBtn} />
      </Switch>
    </div>
  </Router>;

export default App;
