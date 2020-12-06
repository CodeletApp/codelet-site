import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { bool } from 'prop-types';

export const GoBack = ({ activate }) => {
  const location = useLocation();
  const referer = location.state && location.state.referer
  return (
    <>
      {activate && <Redirect to={referer} />}
    </>
  );
};

GoBack.propTypes = {
  activate: bool.isRequired,
};
