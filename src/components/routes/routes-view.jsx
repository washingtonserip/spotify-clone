import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../../pages/home';
import Login from '../../pages/login';
import PrivateRoute from '../private-route';
import CallbackAuth from '../../pages/callback-auth';
import Search from '../../pages/search';
import Album from '../../pages/album';

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

        <Route path="/search">
          <Search />
        </Route>

        <PrivateRoute path="/album">
          <Album />
        </PrivateRoute>

        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default RoutesView;
