import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

// https://reacttraining.com/react-router/web/example/auth-workflow

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

PrivateRoute.defaultProps = {
  component: () => {},
  location: {},
  isAuthenticated: false
};
export default PrivateRoute;
