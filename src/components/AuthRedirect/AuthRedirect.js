import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { bool, string } from 'prop-types';

export const AuthRedirect = ({ activate, to }) => {
  const location = useLocation();
  const referer = location.state && location.state.referer
  return (
    <>
      {activate && <Redirect to={referer || to} />}
    </>
  );
};

AuthRedirect.propTypes = {
  activate: bool.isRequired,
  to: string
};

AuthRedirect.defaultProps = {
  to: '',
};
