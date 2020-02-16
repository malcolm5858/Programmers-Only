import React, { useEffect } from "react";
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import TestPage from "./Pages/TestPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/SignUp" component={Signup} />
        <Route exact path="/:userId" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
