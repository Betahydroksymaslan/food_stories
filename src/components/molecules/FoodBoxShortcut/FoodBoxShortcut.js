import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MealWrapper,
  ImageWrapper,
  MealName,
  DeleteTab,
} from './FoodBoxShortcut.style';
import { cutTooLongString } from 'helpers/stringOperations';
import { useDispatch } from 'react-redux';
import { removeDatabase } from 'actions/databaseActions';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import StyledLink from 'components/atoms/StyledLink/StyledLink';

const FoodBoxShortcut = ({ tabName, tabImage }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const [startAnimation, setStartAnimation] = useState(false);
  const changeAnimationState = () => {
    const changeState = () => setStartAnimation((prevState) => !prevState);

    changeState();
    setTimeout(changeState, 500);
  };

  const removeTab = async () => {
    const ref = `users/${auth.uid}/fastList/${tabName}`;
    const message = 'usunięto zakładkę';

    dispatch(removeDatabase(ref, message));
  };
  return (
    <StyledLink to={`/food_stories/recipe/${tabName}`}>
      <MealWrapper
        as={motion.div}
        layout
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={changeAnimationState}
        animationState={startAnimation}
      >
        <ImageWrapper>
          <img src={tabImage} alt={tabName} />
        </ImageWrapper>
        <MealName>{cutTooLongString(tabName, 40)}</MealName>
        <DeleteTab onClick={removeTab}>-</DeleteTab>
      </MealWrapper>
    </StyledLink>
  );
};

FoodBoxShortcut.propTypes = {
  data: PropTypes.object,
};

export default FoodBoxShortcut;
