import React from 'react';
import PropTypes from 'prop-types';
import { BackWrapper } from './Back.style';
import { useHistory, useLocation } from 'react-router-dom';

type BackProps = { callback: () => void}

const Back = ({ callback }: BackProps) => {
  const history = useHistory();
  const location = useLocation();
  const isRecipePath = /(.*)(recipe)/.test(location.pathname);
  const goBack = (): void => {
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
