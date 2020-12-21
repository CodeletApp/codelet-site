import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { bool } from 'prop-types';

export const RefererRedirect = ({ activate }) => {
  const location = useLocation();
  const referer = location.state && location.state.referer
  return (
    <>
      {activate && <Redirect to={referer} />}
    </>
  );
};

RefererRedirect.propTypes = {
  activate: bool.isRequired,
};
