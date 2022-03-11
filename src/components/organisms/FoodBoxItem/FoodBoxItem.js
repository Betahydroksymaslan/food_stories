import React from 'react';
import PropTypes from 'prop-types';
import {
  BoxWrapper,
  InnerWrapper,
  FoodTittle,
  TopWrapper,
  ImageWrapper,
  TittlePropertiesWrapper,
  RateWrapper,
} from './FoodBoxItem.style';
import StyledLink from 'components/atoms/StyledLink/StyledLink';
import { ReactComponent as StarIcon } from 'assets/icons/starIcon.svg';
import { motion } from 'framer-motion';
import { handleRatingStats } from 'helpers/mathOperations';

const FoodBoxItem = ({
  data: { mainImage, mealname, date, cookTime, difficulty, ratings },
}) => {
  const ratingStats = handleRatingStats(ratings);
  return (
    mealname && (
      <StyledLink to={`/food_stories/recipe/${mealname}`}>
        <BoxWrapper
          as={motion.div}
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <InnerWrapper>
            <TopWrapper>
              <span>{difficulty}</span>
              <span>{cookTime} min</span>
            </TopWrapper>

            <ImageWrapper>
              <img src={mainImage} loading="lazy" />
            </ImageWrapper>
          </InnerWrapper>
          <TittlePropertiesWrapper>
            <FoodTittle>{mealname}</FoodTittle>
            <p>{date}</p>
            <RateWrapper>
              <span>{ratingStats.average}</span> <StarIcon />(
              {ratingStats.totalRatesNum} ocen)
            </RateWrapper>
          </TittlePropertiesWrapper>
        </BoxWrapper>
      </StyledLink>
    )
  );
};

FoodBoxItem.propTypes = {};

export default FoodBoxItem;
