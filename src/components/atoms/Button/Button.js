import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.style';

const Button = ({
  children,
  secondary = false,
  wide,
  size = 'm',
  ...rest
}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const changeAnimationState = () =>
    setStartAnimation((prevState) => !prevState);
  return (
    <StyledButton
      animationTriger={startAnimation}
      onClick={changeAnimationState}
      onAnimationEnd={changeAnimationState}
      secondary={secondary}
      wide={wide}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  secondary: PropTypes.bool,
  wide: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

export default Button;
