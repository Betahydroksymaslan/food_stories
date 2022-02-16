import React from 'react';
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

const FoodBoxShortcut = ({ data: { name, imagePath } }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);

  const removeTab = async () => {
    const ref = `users/${auth.uid}/fastList/${name}`;
    const message = 'usunięto zakładkę';

    dispatch(removeDatabase(ref, message));
  };
  return (
    <MealWrapper
      as={motion.div}
      layout
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
      <ImageWrapper>
        <img src={imagePath} alt={name} />
      </ImageWrapper>
      <MealName>{cutTooLongString(name, 40)}</MealName>
      <DeleteTab onClick={removeTab}>-</DeleteTab>
    </MealWrapper>
  );
};

FoodBoxShortcut.propTypes = {
  data: PropTypes.object,
};

export default FoodBoxShortcut;
