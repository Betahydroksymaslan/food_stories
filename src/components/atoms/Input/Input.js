import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.style';

const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

Input.propTypes = {};

export default Input;
