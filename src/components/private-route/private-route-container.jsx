import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

function PrivateRouteContainer({ children, ...rest }) {
  const isAuthenticated = sessionStorage.getItem('access_token');

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) => (isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

PrivateRouteContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouteContainer;
