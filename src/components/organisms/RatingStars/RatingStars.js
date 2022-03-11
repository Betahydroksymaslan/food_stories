import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  RatingWrapper,
  Star,
  StarsWrapper,
  RateName,
  IconWrapper,
} from './RatingStars.style';

const RatingStars = ({
  starsNumber = 5,
  rateName,
  activeStars = 0,
  rateFunction,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(null);

  const handleStarClick = (value) => {
    setCurrentValue(value);
    rateFunction(value);
  };

  const handleMouseOver = (newHoverValue) => setHoverValue(newHoverValue);

  const handleMouseLeave = () => setHoverValue(null);

  const starsArray = Array(starsNumber).fill(0);

  useEffect(() => {
    setCurrentValue(activeStars);
  }, [activeStars]);

  const renderStars = starsArray.map((star, index) => (
    <IconWrapper
      key={index}
      isStarChecked={(currentValue || hoverValue) > index ? true : false}
      onClick={() => handleStarClick(index + 1)}
      onMouseOver={() => handleMouseOver(index + 1)}
      onMouseLeave={handleMouseLeave}
    >
      <Star />
    </IconWrapper>
  ));
  return (
    <RatingWrapper>
      {rateName && <RateName>{rateName}</RateName>}
      <StarsWrapper>{renderStars}</StarsWrapper>
    </RatingWrapper>
  );
};

RatingStars.propTypes = {
  starsNumber: PropTypes.number,
  rateName: PropTypes.string,
  activeStars: PropTypes.number,
  rateFunction: PropTypes.func,
};

export default RatingStars;
