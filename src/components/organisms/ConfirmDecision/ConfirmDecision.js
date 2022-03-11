import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ButtonsWrapper } from './ConfirmDecision.style';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const ConfirmDecision = (props) => {
    console.log(props)
  return (
    <Wrapper>
      <Paragraph>Czy jesteś pewien swojej decyzji?</Paragraph>
      <ButtonsWrapper>
        <Button onClick={props.callback}>tak</Button>
        <Button secondary onClick={props.closeModal}>
          nie, wracam
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

ConfirmDecision.propTypes = {
  closeModal: PropTypes.func,
  callbackFunc: PropTypes.func,
};

export default ConfirmDecision;
