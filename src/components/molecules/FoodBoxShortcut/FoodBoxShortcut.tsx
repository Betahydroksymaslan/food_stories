import { useState, useEffect } from 'react';
import {
  MealWrapper,
  ImageWrapper,
  MealName,
  DeleteTab,
  LinkWrapper,
} from './FoodBoxShortcut.style';
import { cutTooLongString } from 'helpers/stringOperations';
import { useDispatch } from 'react-redux';
import { removeDatabase } from 'actions/databaseActions';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import StyledLink from 'components/atoms/StyledLink/StyledLink';

interface FoodBoxType {
  tabName: string;
  tabImage: string;
}

const FoodBoxShortcut = ({ tabName, tabImage }: FoodBoxType) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const [startAnimation, setStartAnimation] = useState(false);
  let timeoutID;
  const changeAnimationState = () => {
    const changeState = () => setStartAnimation((prevState) => !prevState);

    changeState();
    timeoutID = setTimeout(changeState, 500);
  };

  const removeTab = async () => {
    const ref = `users/${auth.uid}/fastList/${tabName}`;
    const message = 'usunięto zakładkę';

    dispatch(removeDatabase(ref, message));
  };

  useEffect(() => {
    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <LinkWrapper
      as={motion.div}
      layout
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
      <StyledLink to={`/food_stories/recipe/${tabName}`}>
        <MealWrapper
          onClick={changeAnimationState}
          animationState={startAnimation}
        >
          <ImageWrapper>
            <img src={tabImage} alt={tabName} />
          </ImageWrapper>
          <MealName>{cutTooLongString(tabName, 40)}</MealName>
        </MealWrapper>
      </StyledLink>
      <DeleteTab onClick={removeTab}>-</DeleteTab>
    </LinkWrapper>
  );
};

FoodBoxShortcut.propTypes = {};

export default FoodBoxShortcut;
