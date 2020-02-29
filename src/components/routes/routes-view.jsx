import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../../pages/home';
import Login from '../../pages/login';
import CallbackAuth from '../../pages/callback-auth';

function RoutesView() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/callback-auth">
          <CallbackAuth />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default RoutesView;
