import React from 'react';
import PropTypes from 'prop-types';
import { NotFoundWrapper } from './NoMatchFound.style';

const NoMatchFound = (props) => {
  return (
    <NotFoundWrapper>
      Przepraszamy, nie odnaleziono takiej strony :/
    </NotFoundWrapper>
  );
};

NoMatchFound.propTypes = {};

export default NoMatchFound;
