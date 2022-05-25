import React from 'react';
import PropTypes from 'prop-types';
import { StyledSpan } from './ErrorMessage.style';

type ErrorMessageProps = {children: string}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <StyledSpan>{children}</StyledSpan>;
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
