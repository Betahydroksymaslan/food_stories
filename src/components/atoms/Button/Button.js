import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.style';

const Button = ({ children, ...rest }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const changeAnimationState = () =>
    setStartAnimation((prevState) => !prevState);
  return (
    <StyledButton
      animationTriger={startAnimation}
      onClick={changeAnimationState}
      onAnimationEnd={changeAnimationState}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {};

export default Button;
