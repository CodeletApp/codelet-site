import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import cookie from 'react-cookies';
import { Footer } from '../components/Footer';

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const data = cookie.load('codeletauthcookie');
  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          {
            data && data.token ? (
              <>
                <Component {...props} />
                <Footer />
              </>
            ) : (
              <Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
            )
          }
        </>
      )}
    />
  )
};

export default PrivateRoute
