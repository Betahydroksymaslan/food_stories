import React from 'react';
import PropTypes from 'prop-types';
import { BackWrapper } from './Back.style';
import { useHistory } from 'react-router-dom';

const Back = (props) => {
    const history = useHistory()
  const goBack = () => history.goBack();
  return (
    <BackWrapper onClick={goBack}>
      <div></div>
    </BackWrapper>
  );
};

Back.propTypes = {};

export default Back;
