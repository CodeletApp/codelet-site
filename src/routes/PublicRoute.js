import React from 'react';
import { Route } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
  {...rest}
  component={(props) => (
    <>
      <Component {...props} />
      <Footer />
    </>
  )}
  />
);

export default PublicRoute;
