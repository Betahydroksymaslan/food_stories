import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './RatingPrompt.style';
import RatingStars from '../RatingStars/RatingStars';
import Button from 'components/atoms/Button/Button';
import { useSelector } from 'react-redux';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { useHistory } from 'react-router-dom';
import StyledCheckbox from 'components/atoms/StyledCheckbox/StyledCheckbox';

const RatingPrompt = ({ rateFunction, activeStars, handleClose }) => {
  const history = useHistory();
  const auth = useSelector((state) => state.firebase.auth);
  const userData = auth.displayName;
  const userName = userData.split(' ');
  const [isChecked, setIsChecked] = useState(false);

  const handleOnCheckboxChange = () => setIsChecked((prevState) => !prevState);

  const gender =
    userName[0][userName[0].length - 1] === 'a' ? 'female' : 'male';

  const generatedString = `${userName[0]}, jeśli ${
    gender === 'male' ? 'skorzystałeś' : 'skorzystałaś'
  } z tego przepisu, proszę, oceń go!`;

  const handleClick = () => {
    const objectName = `food_stories_user_${auth.uid}`
    const getStorage = JSON.parse(localStorage.getItem(objectName))

    const modifiedStorage = {
      ...getStorage,
      ratingOn: false,
    };
    if (isChecked) {
      localStorage.setItem(objectName, JSON.stringify(modifiedStorage));
      handleClose();
      history.goBack();
    }
    handleClose();
    history.goBack();
  };

  return (
    <Wrapper>
      <Paragraph>{generatedString}</Paragraph>
      <RatingStars activeStars={activeStars} rateFunction={rateFunction} />

      <Button onClick={handleClick} secondary size="s">
        ocenię później
      </Button>
      <StyledCheckbox
        value={isChecked}
        onChange={handleOnCheckboxChange}
        id="disableRatePrompt"
        label="Nie pokazuj mi więcej tego okna"
      />
    </Wrapper>
  );
};

RatingPrompt.propTypes = {};

export default RatingPrompt;
