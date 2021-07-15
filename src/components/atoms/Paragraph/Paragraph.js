import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.style';

const Paragraph = ({
  children,
  isBold,
  customMargin,
  size = 'medium',
  ...rest
}) => {
  return (
    <StyledParagraph
      isBold={isBold}
      customMargin={customMargin}
      size={size}
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
};

export default Paragraph;
