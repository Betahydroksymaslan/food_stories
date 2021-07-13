import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.style';

const Paragraph = ({ children, isBold, size = 'medium' }) => {
  return (
    <StyledParagraph isBold={isBold} size={size}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  isBold: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};

export default Paragraph;
