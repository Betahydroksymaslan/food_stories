import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.style';

const Paragraph = ({
  children,
  isBold,
  customMargin,
  hoverEffect,
  alignText,
  size = 'medium',
  ...rest
}) => {
  return (
    <StyledParagraph
      isBold={isBold}
      customMargin={customMargin}
      size={size}
      hoverEffect={hoverEffect}
      alignText={alignText}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  isBold: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  customMargin: PropTypes.string,
  hoverEffect: PropTypes.bool,
  alignText: PropTypes.string
};

export default Paragraph;
