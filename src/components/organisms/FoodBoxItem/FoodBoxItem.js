import React from 'react';
import PropTypes from 'prop-types';
import {
  BoxWrapper,
  InnerWrapper,
  FoodTittle,
  TopWrapper,
  ImageWrapper,
  TittlePropertiesWrapper,
  RateWrapper
} from './FoodBoxItem.style';
import StyledLink from 'components/atoms/StyledLink/StyledLink';
import { ReactComponent as StarIcon } from 'assets/icons/starIcon.svg';
import { motion } from 'framer-motion';

const FoodBoxItem = ({
  mealImage,
  mealName,
  mealDate,
  mealDifficulty,
  mealTime,
}) => {
  return (
    <StyledLink to={`/food_stories/recipe/${mealName}`}>
      <BoxWrapper
        as={motion.div}
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <InnerWrapper>
          <TopWrapper>
            <span>{mealDifficulty}</span>
            <span>{mealTime} min</span>
          </TopWrapper>

          <ImageWrapper>
            <img src={mealImage} loading="lazy" />
          </ImageWrapper>
        </InnerWrapper>
        <TittlePropertiesWrapper>
          <FoodTittle>{mealName}</FoodTittle>
          <p>{mealDate}</p>
          <RateWrapper>
            <span>4.3</span> <StarIcon />
            (23 ocen)
          </RateWrapper>
        </TittlePropertiesWrapper>
      </BoxWrapper>
    </StyledLink>
  );
};

FoodBoxItem.propTypes = {};

export default FoodBoxItem;
