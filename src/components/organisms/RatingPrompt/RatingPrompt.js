import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InlineWrapper } from './RatingPrompt.style';
import RatingStars from '../RatingStars/RatingStars';
import Button from 'components/atoms/Button/Button';
import { useSelector } from 'react-redux';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { useHistory } from 'react-router-dom';

const RatingPrompt = ({ rateFunction, activeStars, handleClose }) => {
  const history = useHistory();
  const auth = useSelector((state) => state.firebase.auth);
  const userData = auth.displayName;
  const userName = userData.split(' ');

  const gender =
    userName[0][userName[0].length - 1] === 'a' ? 'female' : 'male';

  const generatedString = `${userName[0]}, jeśli ${
    gender === 'male' ? 'skorzystałeś' : 'skorzystałaś'
  } z tego przepisu, proszę, oceń go!`;

  const handleClick = () => {
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
    </Wrapper>
  );
};

RatingPrompt.propTypes = {};

export default RatingPrompt;
