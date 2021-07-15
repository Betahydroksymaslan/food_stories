import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './Modal.style';
import Button from 'components/atoms/Button/Button';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      closeTimeoutMS={100} /* Clases for transitions available in GlobalStyled */
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <Button onClick={handleClose}>zamknij</Button>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default Modal;
