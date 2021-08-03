import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ImageWrapper } from './ImageButton.style';

const ImageButton = ({ children, text, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <ImageWrapper>{children}</ImageWrapper>
      <span>{text}</span>
    </Wrapper>
  );
};

ImageButton.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ImageButton;
