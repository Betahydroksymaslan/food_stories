import React from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from './Close.style';

const Close = ({ closePosition = 'top-left', ...rest }) => {
  return <CloseIcon closePosition={closePosition} {...rest} />;
};

Close.propTypes = { closePosition: PropTypes.oneOf(['top-left', 'top-right']) };

export default Close;
