import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './Modal.style';

const Modal = ({ handleClose, isOpen, children, ...rest }) => {
  return (
    <ModalWrapper
      closeTimeoutMS={
        100
      } /* Clases for transitions available in GlobalStyled */
      contentElement={
        (props, children) => <div {...props}>{children}</div>
        /* Custom Content element. */
      }
      isOpen={isOpen}
      onRequestClose={handleClose}
      {...rest}
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
