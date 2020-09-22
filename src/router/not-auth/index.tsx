import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Screens
import Login from '../../screens/Login';

const RouterNotAuth = () => (
  <Switch>
    <Route path='/' component={Login} />
  </Switch>
)

export default RouterNotAuth;