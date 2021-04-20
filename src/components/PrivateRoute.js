import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from './Login';

const PrivateRoute = ({ component: Component, user, ...rest}) => (
  // <Route path={path} render={() => user ? <Component {...rest} /> : <Redirect to='/login' />} />
  user ? <Component {...rest} /> : <Login />
);

export default PrivateRoute;