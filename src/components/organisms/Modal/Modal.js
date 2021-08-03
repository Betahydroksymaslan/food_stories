import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './Modal.style';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      closeTimeoutMS={100} /* Clases for transitions available in GlobalStyled */
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default Modal;
