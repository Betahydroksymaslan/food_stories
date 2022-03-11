import React from 'react';
import PropTypes from 'prop-types';
import { BackWrapper } from './Back.style';
import { useHistory, useLocation } from 'react-router-dom';

const Back = ({ callback }) => {
  const history = useHistory();
  const location = useLocation();
  const isRecipePath = /(.*)(recipe)/.test(location.pathname);
  const goBack = () => {
    if (callback && isRecipePath) return callback();
    history.goBack();
  };

  return (
    <BackWrapper onClick={goBack}>
      <div></div>
    </BackWrapper>
  );
};

Back.propTypes = {
  callback: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default Back;
