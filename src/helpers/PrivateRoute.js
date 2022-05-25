import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SIGNIN } from 'constants/routes';
import { isLoaded, isEmpty } from 'react-redux-firebase';

 const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...props} />
        ) : (
          <Redirect to={SIGNIN} />
        )
      }
    ></Route>
  );
}

export default PrivateRoute