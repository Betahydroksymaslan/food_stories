import React from 'react';
import PropTypes from 'prop-types';
import { StyledSpan } from './ErrorMessage.style';

const ErrorMessage = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
