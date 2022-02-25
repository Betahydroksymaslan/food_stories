import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ImageWrapper } from './ImageButton.style';

const ImageButton = ({ text, imagePath, ...rest }) => {
  const image = '../../../assets/images/addMealImage.svg';
  return (
    <Wrapper {...rest}>
      <ImageWrapper>
        <img loading="lazy" src={imagePath} />
      </ImageWrapper>

      <span>{text}</span>
    </Wrapper>
  );
};

ImageButton.propTypes = {
  text: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ImageButton;
